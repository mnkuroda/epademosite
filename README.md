# Envision Parents in Action — Demo Site

Modern, event-focused website for [Envision Parents in Action](https://weareepa.weebly.com/) at Envision Science Academy. Plain HTML, CSS, and JavaScript — no build step.

## Pages

- **index.html** — Hero with mini calendar, upcoming events, and quick links
- **events.html** — Full interactive calendar with month/list views and category filters
- **about.html** — EPA mission and overview
- **team.html** — Board members and committee chairs
- **get-involved.html** — Membership, spirit shop, Shop & Earn, volunteer info, meeting minutes
- **contact.html** — Contact form and key email addresses

## Updating Events

Edit `js/events-data.js` to add, remove, or change events. Each event supports:

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Event name |
| `date` | Yes | Start date (`YYYY-MM-DD`) |
| `endDate` | No | Multi-day events |
| `time` / `endTime` | No | 24h format (`18:30`) |
| `location` | No | Where it happens |
| `category` | Yes | `meeting`, `spirit`, `fundraiser`, `family`, or `volunteer` |
| `description` | No | Short summary |
| `link` | No | External URL |
| `featured` | No | Show on homepage |

## Local Preview

```bash
cd epademosite
python -m http.server 8080
# Open http://localhost:8080
```

## Deploy to GitHub Pages

1. Push to `github.com/mnkuroda/epademosite`
2. Settings → Pages → Source: **GitHub Actions**
3. The deploy workflow runs automatically on push to `main`
4. Live at `https://mnkuroda.github.io/epademosite/`

## Demo Note

This is a modernization demo based on content from the existing Weebly site. Contact form submission is simulated client-side. Email addresses and event dates are representative — verify with the EPA board before going live.
