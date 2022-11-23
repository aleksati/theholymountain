import { commonApiHandlers } from "../../functions/commonApiHandlers.js";
import { initValidation, check, post } from "../../middleware/middlewareApi";
import { SITE_DOMAIN } from "../../config";
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

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
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
  });
