import { initValidation, post, body } from "../../../middleware/middlewareApi";
import { commonApiHandlers } from "../../../functions/commonApiHandlers.js";
import nextConnect from "next-connect";
import Stripe from "stripe";
import {
  SITE_DOMAIN,
  SHIPPING_COUNTRIES,
  SHIPPING_DOM_PRICE,
  SHIPPING_WO_PRICE,
} from "../../../config";

const stripeValidators = initValidation([
  body()
    .isArray()
    .withMessage("Checkout body must be array")
    .notEmpty()
    .withMessage("Checkout body cannot be empty"),
]);

const stripe = new Stripe(
  process.env.NODE_ENV !== "production"
    ? process.env.STRIPE_SECRET_KEY_TEST
    : process.env.STRIPE_SECRET_KEY
);

const logoImg = SITE_DOMAIN + "/img/logo-black.png";

export default nextConnect()
  .use(commonApiHandlers)
  .use(post(stripeValidators))
  .post(async (req, res) => {
    // array with multiple shopItems objects
    const cart = req.body;
    // filter so only items with a quantity is handled
    const cartFiltered = cart.filter((item) => item.quantity > 0);

    // transform into Stripe format
    let cartTransformed = [];
    cartFiltered.map((item) => {
      cartTransformed.push({
        price_data: {
          currency: "nok",
          unit_amount: item.price * 100,
          tax_behavior: "exclusive",
          product_data: {
            images: [`${SITE_DOMAIN}/img/${item.key}-shop.png`],
            name: item.title,
            description: item.description,
          },
        },
        quantity: item.quantity,
      });
    });

    if (!cartTransformed.length)
      throw Error("The checkout cart has no items with quantity.");

    // try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: { allowed_countries: SHIPPING_COUNTRIES },
      shipping_options: [
        // {
        //   shipping_rate_data: {
        //     type: "fixed_amount",
        //     fixed_amount: {
        //       amount: 200,
        //       currency: "nok",
        //     },
        //     display_name: "Free",
        //     delivery_estimate: {
        //       minimum: { unit: "business_day", value: 5 },
        //       maximum: { unit: "business_day", value: 10 },
        //     },
        //     tax_behavior: "exclusive",
        //   },
        // },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: SHIPPING_DOM_PRICE * 100,
              currency: "nok",
            },
            display_name: "Norway",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 10 },
            },
            tax_behavior: "exclusive",
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: SHIPPING_WO_PRICE * 100,
              currency: "nok",
            },
            display_name: "Rest of world",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 10 },
              maximum: { unit: "business_day", value: 20 },
            },
            tax_behavior: "exclusive",
          },
        },
      ],
      line_items: cartTransformed,
      mode: "payment",
      success_url: SITE_DOMAIN + "/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: req.headers.origin,
      metadata: {
        images: logoImg,
      },
      automatic_tax: { enabled: true },
    });

    res.status(200).json({ url: session.url });
    // } catch (error) {
    //   console.log(error);
    //   res.status(error.statusCode).json(error);
    // }
  });
