(function () {
  function renderLinkList(items) {
    return `<ul class="favorite-links">${items
      .map(
        (item) =>
          `<li><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}<span class="favorite-link-icon" aria-hidden="true">→</span></a></li>`
      )
      .join("")}</ul>`;
  }

  function renderGroups(groups) {
    return `<div class="accordion-nested">${groups
      .map(
        (group) => `
        <details class="accordion-sub">
          <summary>
            <span class="accordion-title">${group.title}</span>
            <span class="accordion-count">${group.items.length}</span>
          </summary>
          <div class="accordion-sub-panel">${renderLinkList(group.items)}</div>
        </details>`
      )
      .join("")}</div>`;
  }

  function renderSection(section) {
    const body = section.groups
      ? renderGroups(section.groups)
      : renderLinkList(section.items);
    const desc = section.description
      ? `<p class="accordion-desc">${section.description}</p>`
      : "";
    const count = section.groups
      ? section.groups.reduce((sum, g) => sum + g.items.length, 0)
      : section.items.length;

    return `
      <details class="accordion-item" id="${section.id}">
        <summary>
          <span class="accordion-title">${section.title}</span>
          <span class="accordion-count">${count}</span>
        </summary>
        <div class="accordion-panel">
          ${desc}
          ${body}
        </div>
      </details>`;
  }

  function initFavoriteThings() {
    const container = document.getElementById("favorite-things-accordion");
    if (!container || typeof FAVORITE_THINGS === "undefined") return;
    container.innerHTML = FAVORITE_THINGS.map(renderSection).join("");

    const hash = window.location.hash.slice(1);
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        target.open = true;
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  document.addEventListener("DOMContentLoaded", initFavoriteThings);
})();
