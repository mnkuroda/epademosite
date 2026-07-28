(function () {
  const PLACEHOLDER_IMAGE = "assets/images/logo.png";

  function renderCard(item, index) {
    const image = item.image || PLACEHOLDER_IMAGE;
    const isPlaceholder = !item.image;
    const latest = index === 0 ? '<span class="newsletter-card-badge">Latest</span>' : "";

    return `
      <article class="newsletter-card">
        <a class="newsletter-card-link" href="${item.link}" target="_blank" rel="noopener noreferrer">
          <div class="newsletter-card-image${isPlaceholder ? " newsletter-card-image--placeholder" : ""}">
            <img src="${image}" alt="" loading="lazy">
            ${latest}
          </div>
          <div class="newsletter-card-body">
            <time class="newsletter-card-date" datetime="${item.isoDate || ""}">${item.date}</time>
            <h3>${item.title}</h3>
            ${item.excerpt ? `<p>${item.excerpt}</p>` : ""}
            <span class="newsletter-card-cta">Read issue →</span>
          </div>
        </a>
      </article>`;
  }

  function initNewsletterPage() {
    const feed = document.getElementById("newsletter-feed");
    const updated = document.getElementById("newsletter-updated");
    const subscribe = document.getElementById("newsletter-subscribe");
    const archive = document.getElementById("newsletter-archive");

    if (!feed || typeof NEWSLETTERS === "undefined") return;

    if (typeof NEWSLETTER_CONFIG !== "undefined") {
      if (subscribe) subscribe.href = NEWSLETTER_CONFIG.subscribeUrl;
      if (archive) archive.href = NEWSLETTER_CONFIG.archiveUrl;
      if (updated && NEWSLETTER_CONFIG.updatedAt) {
        const when = new Date(NEWSLETTER_CONFIG.updatedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
        updated.textContent = `Archive last updated ${when}.`;
      }
    }

    if (!NEWSLETTERS.length) {
      feed.innerHTML =
        '<p class="newsletter-empty">No newsletters found. Check back soon or subscribe to get updates by email.</p>';
      return;
    }

    feed.innerHTML = NEWSLETTERS.map(renderCard).join("");
  }

  document.addEventListener("DOMContentLoaded", initNewsletterPage);
})();
