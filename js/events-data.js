/**
 * EPA events — update this file to add or change events.
 * Dates use YYYY-MM-DD. Times are optional (24h format).
 */
const EPA_EVENTS = [
  {
    id: "aug-board-2025",
    title: "EPA Board Meeting",
    date: "2025-08-12",
    time: "18:30",
    endTime: "20:00",
    location: "ESA Media Center",
    category: "meeting",
    description: "Monthly board meeting — all members welcome to observe.",
    link: "https://docs.google.com/document/d/1qVgoLpDOmGnl93Dr2-W7aJ6buq-c0p-rsIUk9Bi-3Xk/edit"
  },
  {
    id: "sep-general-2025",
    title: "EPA General Meeting",
    date: "2025-09-09",
    time: "18:00",
    endTime: "19:30",
    location: "ESA Cafeteria",
    category: "meeting",
    description: "Kick off the school year! Learn about EPA initiatives and how to get involved.",
    featured: true
  },
  {
    id: "sep-spirit-shop-2025",
    title: "Fall Spirit Shop Opens",
    date: "2025-09-15",
    time: "07:30",
    endTime: "08:15",
    location: "ESA Front Lobby",
    category: "spirit",
    description: "Spirit shirts, blankets, water bottles, decals & more. Cash and card accepted.",
    featured: true
  },
  {
    id: "oct-stock-shelves-2025",
    title: "Stock the Shelves",
    date: "2025-10-03",
    time: "08:00",
    endTime: "09:00",
    location: "Drop-off at Front Office",
    category: "volunteer",
    description: "Help restock teacher supply closets. See the wish list for most-needed items.",
    featured: true
  },
  {
    id: "oct-cultural-2025",
    title: "Cultural Heritage Night",
    date: "2025-10-16",
    time: "17:30",
    endTime: "20:00",
    location: "ESA Gymnasium",
    category: "family",
    description: "Celebrate the diverse cultures of our ESA community with food, music, and displays.",
    featured: true
  },
  {
    id: "nov-board-2025",
    title: "EPA Board Meeting",
    date: "2025-11-11",
    time: "18:30",
    endTime: "20:00",
    location: "ESA Media Center",
    category: "meeting",
    description: "Monthly board meeting.",
    link: "https://docs.google.com/document/d/1PwdzUxWeB5zlcPfi024xk1oryyuGb5xN7_MOQCwiW0E/edit"
  },
  {
    id: "nov-book-fair-2025",
    title: "Scholastic Book Fair",
    date: "2025-11-17",
    time: "07:30",
    endTime: "15:30",
    location: "ESA Media Center",
    category: "fundraiser",
    description: "Shop for books and support our school library. Open during school hours all week.",
    endDate: "2025-11-21",
    featured: true
  },
  {
    id: "dec-general-2025",
    title: "EPA General Meeting & Holiday Social",
    date: "2025-12-09",
    time: "18:00",
    endTime: "19:30",
    location: "ESA Cafeteria",
    category: "meeting",
    description: "Year-end general meeting followed by a light holiday social.",
    featured: true
  },
  {
    id: "dec-spirit-day-2025",
    title: "Holiday Spirit Day",
    date: "2025-12-19",
    time: "08:00",
    location: "All Campuses",
    category: "spirit",
    description: "Wear your favorite holiday gear or EPA spirit wear!"
  },
  {
    id: "jan-board-2026",
    title: "EPA Board Meeting",
    date: "2026-01-13",
    time: "18:30",
    endTime: "20:00",
    location: "ESA Media Center",
    category: "meeting",
    description: "Monthly board meeting.",
    link: "https://docs.google.com/document/d/1tTjU5XhaSn6ZhfejmonLKfPQq2a3cUaQTg8zGBI3uus/edit"
  },
  {
    id: "jan-stock-shelves-2026",
    title: "Stock the Shelves",
    date: "2026-01-23",
    time: "08:00",
    endTime: "09:00",
    location: "Drop-off at Front Office",
    category: "volunteer",
    description: "Mid-year supply drive for classrooms.",
    featured: true
  },
  {
    id: "feb-general-2026",
    title: "EPA General Meeting",
    date: "2026-02-10",
    time: "18:00",
    endTime: "19:30",
    location: "ESA Cafeteria",
    category: "meeting",
    description: "Spring semester planning and volunteer sign-ups.",
    featured: true
  },
  {
    id: "feb-fundraiser-2026",
    title: "Restaurant Night — Panic Point",
    date: "2026-02-21",
    time: "17:00",
    endTime: "21:00",
    location: "Panic Point Haunted House",
    category: "fundraiser",
    description: "Book online with code \"fundenvision\" for 10% off. A portion of proceeds benefits EPA.",
    link: "https://raleighhauntedhouse.com"
  },
  {
    id: "mar-board-2026",
    title: "EPA Board Meeting",
    date: "2026-03-10",
    time: "18:30",
    endTime: "20:00",
    location: "ESA Media Center",
    category: "meeting",
    description: "Monthly board meeting.",
    link: "https://docs.google.com/document/d/1rm6neSJvd0z1DOzH1yV2zqa-76K8W-4ByvNztMu9Jxc/edit"
  },
  {
    id: "mar-family-fun-2026",
    title: "Family Fun Night",
    date: "2026-03-20",
    time: "17:00",
    endTime: "20:00",
    location: "ESA Gymnasium",
    category: "family",
    description: "Games, food trucks, and fun for the whole family. Volunteers needed!",
    featured: true
  },
  {
    id: "apr-board-2026",
    title: "EPA Board Meeting",
    date: "2026-04-14",
    time: "18:30",
    endTime: "20:00",
    location: "ESA Media Center",
    category: "meeting",
    description: "Monthly board meeting.",
    link: "https://docs.google.com/document/d/1Z9cebZVFDdtQKaTuKywP2fLJ5zhwOGOBL_09XwFJv6c/edit"
  },
  {
    id: "apr-spirit-shop-2026",
    title: "Spring Spirit Shop",
    date: "2026-04-21",
    time: "07:30",
    endTime: "08:15",
    location: "ESA Front Lobby",
    category: "spirit",
    description: "New spring spirit gear available. Shop before school!",
    featured: true
  },
  {
    id: "may-board-2026",
    title: "EPA Board Meeting",
    date: "2026-05-12",
    time: "18:30",
    endTime: "20:00",
    location: "ESA Media Center",
    category: "meeting",
    description: "End-of-year board meeting and officer transitions.",
    link: "https://docs.google.com/document/d/1sy5sAbyHkQd4Vuhl5QycxnLRluZHwsuD7IGrNCYBdN8/edit"
  },
  {
    id: "may-general-2026",
    title: "EPA General Meeting",
    date: "2026-05-20",
    time: "18:00",
    endTime: "19:30",
    location: "ESA Cafeteria",
    category: "meeting",
    description: "Celebrate the year and elect next year's board.",
    featured: true
  },
  {
    id: "may-volunteer-2026",
    title: "Teacher Appreciation Week",
    date: "2026-05-04",
    endDate: "2026-05-08",
    location: "ESA",
    category: "volunteer",
    description: "Help us show our teachers how much we appreciate them. Sign up to bring treats or help with lunches.",
    featured: true
  }
];

const EVENT_CATEGORIES = {
  meeting: { label: "Meetings", color: "#2b6cb0" },
  spirit: { label: "Spirit", color: "#805ad5" },
  fundraiser: { label: "Fundraisers", color: "#d69e2e" },
  family: { label: "Family Events", color: "#38a169" },
  volunteer: { label: "Volunteer", color: "#dd6b20" }
};
