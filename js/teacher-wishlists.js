(function () {
  function renderItem(item) {
    if (item.url) {
      return `<li><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}<span class="favorite-link-icon" aria-hidden="true">→</span></a></li>`;
    }
    return `<li><span class="wishlist-item-name">${item.name}</span></li>`;
  }

  function renderLinkList(items) {
    return `<ul class="favorite-links">${items.map(renderItem).join("")}</ul>`;
  }

  function renderSection(section) {
    return `
      <details class="accordion-item" id="${section.id}">
        <summary>
          <span class="accordion-title">${section.title}</span>
          <span class="accordion-count">${section.items.length}</span>
        </summary>
        <div class="accordion-panel">
          ${renderLinkList(section.items)}
        </div>
      </details>`;
  }

  function initTeacherWishlists() {
    const container = document.getElementById("teacher-wishlists-accordion");
    if (!container || typeof TEACHER_WISHLISTS === "undefined") return;
    container.innerHTML = TEACHER_WISHLISTS.map(renderSection).join("");

    const hash = window.location.hash.slice(1);
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        target.open = true;
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  document.addEventListener("DOMContentLoaded", initTeacherWishlists);
})();
