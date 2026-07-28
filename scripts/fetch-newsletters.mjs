/**
 * Fetches EPA newsletters from Mailchimp RSS and writes js/newsletter-data.js
 * Run: node scripts/fetch-newsletters.mjs
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const FEED_URL =
  "https://us9.campaign-archive.com/feed?u=b70e00ab4f32c531718c6bb5b&id=8c362a64cc";
const SUBSCRIBE_URL = "http://eepurl.com/cpzjf1";
const ARCHIVE_URL =
  "https://us9.campaign-archive.com/home/?u=b70e00ab4f32c531718c6bb5b&id=8c362a64cc";

function decodeCdata(value) {
  return value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .trim();
}

function extractTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? decodeCdata(match[1]) : "";
}

function extractMeta(html, property) {
  const match = html.match(
    new RegExp(`<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["']`, "i")
  );
  if (match) return match[1];
  const alt = html.match(
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${property}["']`, "i")
  );
  return alt ? alt[1] : "";
}

function extractImage(html) {
  const imgSrcs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)]
    .map((match) => match[1])
    .filter(
      (src) =>
        src.includes("mcusercontent.com") &&
        !src.includes("cdn-images.mailchimp.com")
    );

  if (imgSrcs.length) return imgSrcs[0];

  const inlineMatch = html.match(
    /https:\/\/mcusercontent\.com\/[^"'\s>]+\.(?:png|jpe?g|gif|webp)/i
  );
  if (inlineMatch) return inlineMatch[0];

  return (
    extractMeta(html, "og:image") ||
    extractMeta(html, "twitter:image:src") ||
    ""
  );
}

function cleanExcerpt(text, title) {
  if (!text) return "";
  const normalized = text.replace(/\s+/g, " ").trim();
  const boilerplate = [
    "view this email in your browser",
    "bi-monthly newsletter",
    "newsletters are best viewed",
  ];
  const lower = normalized.toLowerCase();
  if (boilerplate.some((phrase) => lower.includes(phrase))) return "";
  if (normalized === title || normalized.startsWith(title)) return "";
  return normalized.slice(0, 140) + (normalized.length > 140 ? "…" : "");
}

function extractExcerpt(html, title) {
  const ogDesc = extractMeta(html, "og:description");
  const stale =
    ogDesc &&
    (ogDesc.includes("Holiday Cheer") || ogDesc.length < 20 || ogDesc === title);
  if (ogDesc && !stale) return cleanExcerpt(ogDesc, title);

  const text = html
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return cleanExcerpt(text, title);
}

function formatDate(pubDate) {
  if (!pubDate) return "";
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return pubDate;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function parseFeed(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const title = extractTag(block, "title");
    const link = extractTag(block, "link");
    const pubDate = extractTag(block, "pubDate");
    const description = extractTag(block, "description");
    const image = extractImage(description);
    const excerpt = extractExcerpt(description, title);

    if (!title || !link) continue;

    items.push({
      title,
      link,
      date: formatDate(pubDate),
      isoDate: pubDate ? new Date(pubDate).toISOString() : "",
      image,
      excerpt,
    });
  }

  return items;
}

async function main() {
  const response = await fetch(FEED_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch RSS feed (${response.status})`);
  }

  const xml = await response.text();
  const newsletters = parseFeed(xml);

  const output = `/**
 * EPA newsletter archive — auto-generated from Mailchimp RSS.
 * Regenerate: node scripts/fetch-newsletters.mjs
 */
const NEWSLETTER_CONFIG = {
  feedUrl: ${JSON.stringify(FEED_URL)},
  subscribeUrl: ${JSON.stringify(SUBSCRIBE_URL)},
  archiveUrl: ${JSON.stringify(ARCHIVE_URL)},
  updatedAt: ${JSON.stringify(new Date().toISOString())},
};

const NEWSLETTERS = ${JSON.stringify(newsletters, null, 2)};
`;

  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  const outPath = join(root, "js", "newsletter-data.js");
  writeFileSync(outPath, output, "utf8");
  console.log(`Wrote ${newsletters.length} newsletters to ${outPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
