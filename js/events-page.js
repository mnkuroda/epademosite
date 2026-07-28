(function () {
  function formatTime(time) {
    if (!time) return "";
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    return `${hour12}:${String(minutes).padStart(2, "0")} ${period}`;
  }

  function formatTimeRange(time, endTime) {
    if (!time) return "";
    if (!endTime) return formatTime(time);
    return `${formatTime(time)} – ${formatTime(endTime)}`;
  }

  function formatDate(dateStr) {
    const date = new Date(`${dateStr}T12:00:00`);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function isUpcoming(dateStr) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const eventDate = new Date(`${dateStr}T12:00:00`);
    return eventDate >= today;
  }

  function renderEventCard(event, options = {}) {
    const { dateInHeader = false } = options;
    const timeLabel = formatTimeRange(event.time, event.endTime);
    const location = event.location
      ? `<p class="event-flyer-card-location">${event.location}</p>`
      : "";
    const meta = `
          <div class="event-flyer-card-meta">
            <time datetime="${event.date}">${formatDate(event.date)}</time>
            ${timeLabel ? `<span>${timeLabel}</span>` : ""}
          </div>`;

    const headerMeta = dateInHeader ? meta : "";
    const bodyMeta = dateInHeader ? "" : meta;

    return `
      <article class="event-flyer-card${dateInHeader ? " event-flyer-card--list" : ""}">
        <div class="event-flyer-card-header">
          <h3>${event.title}</h3>
          ${headerMeta}
        </div>
        <div class="event-flyer-card-image">
          <img src="${event.flyer}" alt="${event.title} event flyer" loading="lazy">
        </div>
        <div class="event-flyer-card-body">
          ${bodyMeta}
          <p>${event.description}</p>
          ${location}
        </div>
      </article>`;
  }

  function getUpcomingEvents() {
    return UPCOMING_EVENTS.filter((event) => isUpcoming(event.date)).sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }

  function renderEventsList(container, limit, options = {}) {
    if (!container || typeof UPCOMING_EVENTS === "undefined") return;

    const events = limit ? getUpcomingEvents().slice(0, limit) : getUpcomingEvents();

    if (!events.length) {
      container.innerHTML =
        '<p class="events-upcoming-empty">No upcoming events right now. Check the calendar for school-wide dates.</p>';
      return;
    }

    container.innerHTML = events.map((event) => renderEventCard(event, options)).join("");
  }

  function initEventsPage() {
    renderEventsList(document.getElementById("upcoming-events-list"), null, { dateInHeader: true });
    renderEventsList(document.getElementById("home-upcoming-events"), 4);
  }

  document.addEventListener("DOMContentLoaded", initEventsPage);
})();
