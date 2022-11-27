import { commonApiHandlers } from "../../functions/commonApiHandlers.js";
import { initValidation, check, post } from "../../middleware/middlewareApi";
import {
  SITE_DOMAIN,
  SHIPPING_COUNTRIES,
  SHIPPING_DOM_PRICE,
  SHIPPING_WO_PRICE,
} from "../../config";
import nextConnect from "next-connect";
import Stripe from "stripe";

const stripeValidators = initValidation([
  check("key")
    .exists()
    .withMessage("Key is missing")
    .notEmpty()
    .withMessage("Key is empty"),
  check("name")
    .exists()
    .withMessage("Name is missing")
    .notEmpty()
    .withMessage("Name is empty"),
  check("quantity")
    .exists()
    .withMessage("Quantity is missing")
    .notEmpty()
    .withMessage("Quantity is empty")
    .isInt({ min: 0 })
    .withMessage("Quantity must be number over 0."),
  check("price")
    .exists()
    .withMessage("Price is missing")
    .notEmpty()
    .withMessage("Price is empty"),
  check("description")
    .exists()
    .withMessage("Description is missing")
    .notEmpty()
    .withMessage("Description is empty"),
]);

const stripe = new Stripe(
  process.env.NODE_ENV !== "production"
    ? process.env.STRIPE_SECRET_KEY_TEST
    : process.env.STRIPE_SECRET_KEY
);

export default nextConnect()
  .use(commonApiHandlers)
  .use(post(stripeValidators))
  .post(async (req, res) => {
    const shopItem = req.body;
    const imgPath = SITE_DOMAIN + "/img/" + shopItem.key + "-shop.png";

    const transformedShopItem = {
      price_data: {
        currency: "nok",
        unit_amount: shopItem.price * 100,
        tax_behavior: "exclusive",
        product_data: {
          images: [imgPath],
          name: shopItem.name,
          description: shopItem.description,
        },
      },
      quantity: shopItem.quantity,
    };

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: { allowed_countries: SHIPPING_COUNTRIES },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: {
                amount: 0,
                currency: "nok",
              },
              display_name: "Free",
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
        line_items: [transformedShopItem],
        mode: "payment",
        success_url: SITE_DOMAIN + "/success.html",
        cancel_url: SITE_DOMAIN + "/cancel.html",
        metadata: {
          images: imgPath,
        },
        automatic_tax: { enabled: true },
      });

      res.status(200).json({ url: session.url });
    } catch (error) {
      console.log(error);
      res.status(error.statusCode).json(error);
    }
  });
