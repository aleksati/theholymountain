import { commonApiHandlers } from "../../../functions/commonApiHandlers.js";
import nextConnect from "next-connect";
import Stripe from "stripe";

const stripe = new Stripe(
  process.env.NODE_ENV !== "production"
    ? process.env.STRIPE_SECRET_KEY_TEST
    : process.env.STRIPE_SECRET_KEY
);

export default nextConnect()
  .use(commonApiHandlers)
  .get(async (req, res) => {
    const id = req.query.id;

    if (!id.startsWith("cs_")) throw Error("Incorrect checkout session_id.");

    const checkout_session = await stripe.checkout.sessions.retrieve(id);

    res.status(200).json(checkout_session);
  });
