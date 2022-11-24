import { commonApiHandlers } from "../../functions/commonApiHandlers.js";
import { initValidation, check, post } from "../../middleware/middlewareApi";
import nextConnect from "next-connect";
import { buffer } from "micro";
import Stripe from "stripe";

// handle the orders that are made in my webshop
// from
// https://www.youtube.com/watch?v=nVvDr6MyEXE

export const config = {
  api: {
    bodyParser: false,
  },
};

const hookValidator = initValidation([]);

const stripe = new Stripe(
  process.env.NODE_ENV !== "production"
    ? process.env.STRIPE_SECRET_KEY_TEST
    : process.env.STRIPE_SECRET_KEY
);

export default nextConnect()
  .use(commonApiHandlers)
  .use(post(hookValidator))
  .post(async (req, res) => {
    // verify that the request is coming from Stripe
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

    let event;

    try {
      if (!sig || !webhookSecret) return;

      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (error) {
      console.log(`Webhook error: ${error.message}`);
      return res.status(400).send(`Webhook error: ${error.message}`);
    }

    // buisness logic
    console.log("event: ", event.type);

    res.status(200).send();
  });