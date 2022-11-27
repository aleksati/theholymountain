const dev = process.env.NODE_ENV !== "production";

export const SITE_DOMAIN = dev
  ? "http://localhost:3000"
  : "https://www.theholymountain.net";

// Used in /api/createStripeSession.js
export const SHIPPING_COUNTRIES = ["US", "NO", "CA"];
export const SHIPPING_DOM_PRICE = 50; // nok
export const SHIPPING_WO_PRICE = 100; // nok
