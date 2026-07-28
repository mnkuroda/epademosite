/**
 * EPA Calendar — month grid, list view, and event filtering.
 */
(function () {
  const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function parseDate(str) {
    const [y, m, d] = str.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function formatDate(dateStr) {
    return parseDate(dateStr).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  function formatTime(timeStr) {
    if (!timeStr) return "";
    const [h, m] = timeStr.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hour = h % 12 || 12;
    return `${hour}:${String(m).padStart(2, "0")} ${period}`;
  }

  function eventOccursOn(event, date) {
    const start = parseDate(event.date);
    const end = event.endDate ? parseDate(event.endDate) : start;
    const check = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const s = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const e = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    return check >= s && check <= e;
  }

  function getEventsForDate(date, events, category) {
    return events.filter((ev) => {
      if (category && ev.category !== category) return false;
      return eventOccursOn(ev, date);
    });
  }

  function getUpcomingEvents(events, limit, category) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return events
      .filter((ev) => {
        const end = ev.endDate ? parseDate(ev.endDate) : parseDate(ev.date);
        if (category && ev.category !== category) return false;
        return end >= today;
      })
      .sort((a, b) => parseDate(a.date) - parseDate(b.date))
      .slice(0, limit);
  }

  function renderEventCard(event, options = {}) {
    const cat = EVENT_CATEGORIES[event.category] || { label: "Event", color: "#718096" };
    const compact = options.compact;
    const timeStr = event.time
      ? event.endTime
        ? `${formatTime(event.time)} – ${formatTime(event.endTime)}`
        : formatTime(event.time)
      : "";

    const dateStr = event.endDate
      ? `${formatDate(event.date)} – ${formatDate(event.endDate)}`
      : formatDate(event.date);

    return `
      <article class="event-card${compact ? " event-card--compact" : ""}" data-category="${event.category}">
        <div class="event-card-date">
          <span class="event-card-month">${MONTHS[parseDate(event.date).getMonth()].slice(0, 3)}</span>
          <span class="event-card-day">${parseDate(event.date).getDate()}</span>
        </div>
        <div class="event-card-body">
          <span class="event-badge" style="--badge-color: ${cat.color}">${cat.label}</span>
          <h3 class="event-card-title">${event.title}</h3>
          ${!compact ? `<p class="event-card-meta">${dateStr}${timeStr ? ` · ${timeStr}` : ""}${event.location ? ` · ${event.location}` : ""}</p>` : ""}
          ${!compact && event.description ? `<p class="event-card-desc">${event.description}</p>` : ""}
          ${event.link ? `<a class="event-card-link" href="${event.link}" target="_blank" rel="noopener noreferrer">Learn more →</a>` : ""}
        </div>
      </article>`;
  }

  function renderCalendar(container, year, month, events, category, onDayClick) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPad = firstDay.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let html = `<div class="cal-grid" role="grid" aria-label="${MONTHS[month]} ${year}">`;
    WEEKDAYS.forEach((d) => {
      html += `<div class="cal-weekday" role="columnheader">${d}</div>`;
    });

    for (let i = 0; i < startPad; i++) {
      html += `<div class="cal-day cal-day--empty" aria-hidden="true"></div>`;
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      const dayEvents = getEventsForDate(date, events, category);
      const isToday = date.getTime() === today.getTime();
      const hasEvents = dayEvents.length > 0;

      html += `
        <button
          class="cal-day${isToday ? " cal-day--today" : ""}${hasEvents ? " cal-day--has-events" : ""}"
          data-date="${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}"
          aria-label="${MONTHS[month]} ${day}, ${year}${hasEvents ? `, ${dayEvents.length} event${dayEvents.length > 1 ? "s" : ""}` : ""}"
          ${hasEvents ? "" : "disabled"}
        >
          <span class="cal-day-num">${day}</span>
          ${hasEvents ? `<span class="cal-day-dots">${dayEvents.map((e) => `<span class="cal-dot" style="background:${EVENT_CATEGORIES[e.category]?.color || "#718096"}"></span>`).join("")}</span>` : ""}
        </button>`;
    }

    html += "</div>";
    container.innerHTML = html;

    container.querySelectorAll(".cal-day:not(.cal-day--empty):not([disabled])").forEach((btn) => {
      btn.addEventListener("click", () => {
        const dateStr = btn.dataset.date;
        const date = parseDate(dateStr);
        const dayEvents = getEventsForDate(date, events, category);
        onDayClick(date, dayEvents);
        container.querySelectorAll(".cal-day--selected").forEach((el) => el.classList.remove("cal-day--selected"));
        btn.classList.add("cal-day--selected");
      });
    });
  }

  function initCalendarPage() {
    const calContainer = document.getElementById("calendar-grid");
    const monthLabel = document.getElementById("cal-month-label");
    const prevBtn = document.getElementById("cal-prev");
    const nextBtn = document.getElementById("cal-next");
    const todayBtn = document.getElementById("cal-today");
    const dayDetail = document.getElementById("cal-day-detail");
    const listContainer = document.getElementById("event-list");
    const filterBtns = document.querySelectorAll("[data-filter]");
    const viewBtns = document.querySelectorAll("[data-view]");

    if (!calContainer) return;

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let activeCategory = "";
    let activeView = "calendar";

    function updateMonthLabel() {
      if (monthLabel) monthLabel.textContent = `${MONTHS[currentMonth]} ${currentYear}`;
    }

    function showDayDetail(date, events) {
      if (!dayDetail) return;
      if (!events.length) {
        dayDetail.innerHTML = `<p class="cal-detail-empty">No events on ${formatDate(date.toISOString().slice(0, 10))}.</p>`;
        return;
      }
      dayDetail.innerHTML = `
        <h3 class="cal-detail-heading">${formatDate(date.toISOString().slice(0, 10))}</h3>
        <div class="cal-detail-events">${events.map((e) => renderEventCard(e)).join("")}</div>`;
    }

    function render() {
      updateMonthLabel();
      renderCalendar(calContainer, currentYear, currentMonth, EPA_EVENTS, activeCategory, showDayDetail);

      if (listContainer) {
        const upcoming = getUpcomingEvents(EPA_EVENTS, 50, activeCategory);
        listContainer.innerHTML = upcoming.length
          ? upcoming.map((e) => renderEventCard(e)).join("")
          : `<p class="event-list-empty">No upcoming events in this category.</p>`;
      }
    }

    prevBtn?.addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) { currentMonth = 11; currentYear--; }
      render();
    });

    nextBtn?.addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) { currentMonth = 0; currentYear++; }
      render();
    });

    todayBtn?.addEventListener("click", () => {
      const now = new Date();
      currentYear = now.getFullYear();
      currentMonth = now.getMonth();
      render();
    });

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        activeCategory = btn.dataset.filter || "";
        render();
      });
    });

    viewBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        viewBtns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        activeView = btn.dataset.view;
        document.getElementById("calendar-view")?.classList.toggle("is-hidden", activeView !== "calendar");
        document.getElementById("list-view")?.classList.toggle("is-hidden", activeView !== "list");
      });
    });

    render();
  }

  function initUpcomingSection() {
    const container = document.getElementById("upcoming-events");
    if (!container) return;
    const featured = EPA_EVENTS.filter((e) => e.featured);
    const upcoming = getUpcomingEvents(featured.length ? featured : EPA_EVENTS, 4);
    container.innerHTML = upcoming.map((e) => renderEventCard(e, { compact: true })).join("");
  }

  function initMiniCalendar() {
    const container = document.getElementById("mini-calendar");
    if (!container) return;
    const now = new Date();
    renderCalendar(container, now.getFullYear(), now.getMonth(), EPA_EVENTS, "", (date, events) => {
      window.location.href = `events.html#${date.toISOString().slice(0, 10)}`;
    });
    const label = container.closest(".mini-cal")?.querySelector(".mini-cal-label");
    if (label) label.textContent = `${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
  }

  window.EPACalendar = {
    getUpcomingEvents,
    renderEventCard,
    formatDate,
    formatTime,
    initCalendarPage,
    initUpcomingSection,
    initMiniCalendar
  };

  document.addEventListener("DOMContentLoaded", () => {
    initCalendarPage();
    initUpcomingSection();
    initMiniCalendar();
  });
})();
