import { commonApiHandlers } from "../../functions/commonApiHandlers.js";
import nextConnect from "next-connect";

export default nextConnect()
  .use(commonApiHandlers)
  .get(async (req, res) => {
    res.status(200).json({
      STRIPE_PUBLISHABLE_KEY:
        process.env.NODE_ENV !== "production"
          ? process.env.STRIPE_PUBLISHABLE_KEY_TEST
          : process.env.STRIPE_PUBLISHABLE_KEY,
      BANDMAIL: process.env.BANDMAIL,
    });
  });
