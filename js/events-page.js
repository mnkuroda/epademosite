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

  function renderEventCard(event) {
    const timeLabel = formatTimeRange(event.time, event.endTime);
    const location = event.location
      ? `<p class="event-flyer-card-location">${event.location}</p>`
      : "";

    return `
      <article class="event-flyer-card">
        <div class="event-flyer-card-header">
          <h3>${event.title}</h3>
        </div>
        <div class="event-flyer-card-image">
          <img src="${event.flyer}" alt="${event.title} event flyer" loading="lazy">
        </div>
        <div class="event-flyer-card-body">
          <div class="event-flyer-card-meta">
            <time datetime="${event.date}">${formatDate(event.date)}</time>
            ${timeLabel ? `<span>${timeLabel}</span>` : ""}
          </div>
          <p>${event.description}</p>
          ${location}
        </div>
      </article>`;
  }

  function initEventsPage() {
    const container = document.getElementById("upcoming-events-list");
    if (!container || typeof UPCOMING_EVENTS === "undefined") return;

    const events = UPCOMING_EVENTS.filter((event) => isUpcoming(event.date)).sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    if (!events.length) {
      container.innerHTML =
        '<p class="events-upcoming-empty">No upcoming events right now. Check the calendar for school-wide dates.</p>';
      return;
    }

    container.innerHTML = events.map(renderEventCard).join("");
  }

  document.addEventListener("DOMContentLoaded", initEventsPage);
})();
