export const searchOptions = {
  city: [
    "Amsterdam",
    "Rotterdam",
    "The Hague",
    "Utrecht",
    "Eindhoven",
    "Tilburg",
    "Groningen",
    "Almere Stad",
    "Breda",
    "Nijmegen",
    "Enschede",
    "Haarlem",
  ],
  price: [
    "No Preference",
    "> €500",
    "> €1000",
    "> €2000",
    "> €3000",
    "> €4000",
    "> €5000",
    "> €7000",
  ],
  bedrooms: ["No Preference", "1", "2", "3", "4", "5"],
  interior: ["No Preference", "Furnished", "Unfurnished", "Semi-furnished"],
  category: ["No Preference", "Apartment", "Room", "Bungalow", "House"],
};

export const aboutUs = [
  {
    icon: "home",
    text:
      "The leading rental website in the Netherlands connected with over 1,500 rental specialists",
  },
  {
    icon: "handshake",
    text: "About 25 years of experience in Housing rentals and management",
  },
  {
    icon: "search",
    text: "Every year over 70,000 people find a rental property through Pararius.",
  },
  {
    icon: "user-clock",
    text: "No waiting list! Quickly find your rental property",
  },
  {
    icon: "check-square",
    text: "Easily Book the best rental poperties in your area",
  },
  {
    icon: "calendar-plus",
    text: "Every day the latest rentals, rooms and developments",
  },
  {
    icon: "piggy-bank",
    text: "Housing Solutions is completely free to use",
  },
];

export const socialMediaIcons = [
  { type: ["fab", "facebook"] },
  { type: ["fab", "twitter"] },
  { type: ["fab", "google-plus"] },
];

export const companyStats = [
  { endNumber: 2500, category: "Clients", icon: "users" },
  { endNumber: 3055, category: "Bookings", icon: "calendar-plus" },
  { endNumber: 1000, category: "Houses", icon: "home" },
  { endNumber: 20, category: "Cities", icon: "city" },
];

export const SortOptions = [
  { id: "price_ASC", text: "Price: Low to High" },
  { id: "price_DSC", text: "Price: High to low" },
  { id: "availability_ASC", text: "Availability: Old to New" },
  { id: "availability_DSC", text: "Availability: New to old" },
];
