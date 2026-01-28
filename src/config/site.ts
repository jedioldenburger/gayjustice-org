// src/config/site.ts
export const SITE = {
  name: "GayJustice.org",
  shortName: "GayJustice.org",
  displayUrl: "GayJustice.org",
  url: "https://www.gayjustice.org",
  defaultLocale: "nl-NL",
  themeColor: "#0b0f14",

  email: "info@gayjustice.org",
  defaultOgImage: "/pictures/og-gayjustice.webp",

  parentOrganization: {
    name: "Stichting Vrijheid & Gelijkheid",
    legalName: "Stichting Vrijheid & Gelijkheid",
    shortName: "STVG",
    url: "https://www.stvg.org/",
    logo: "https://www.stvg.org/assets/logo-stvg.png",
  },

  address: {
    streetAddress: "Sint Olofssteeg 4 C",
    postalCode: "1012 AK",
    addressLocality: "Amsterdam",
    addressCountry: "NL",
  },

  identifiers: {
    kvk: "", // Chamber of Commerce number (add when available)
    rsin: "", // RSIN number (add when available)
  },

  // Set to true when ANBI status is obtained
  isANBI: false,

  knowsAbout: [
    "Gay rights",
    "Anti-discrimination law",
    "Equal treatment",
    "Human rights",
    "Legal protection",
  ],

  sameAs: ["https://www.stvg.org/"] as string[],
};
