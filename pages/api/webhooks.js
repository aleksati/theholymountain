import { commonApiHandlers } from "../../functions/commonApiHandlers.js";
import { initValidation, check, post } from "../../middleware/middlewareApi";
import sendMail from "../../functions/sendMail";
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

let receipt_url;

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

    // get the receipt url
    if (event.type === "charge.succeeded") {
      receipt_url = event.data.object.receipt_url;
    }

    ///// buisness logic /////
    if (event.type === "checkout.session.completed") {
      const customer_details = event.data.object.customer_details;

      const mailData = {
        name: "The Holy Mountain",
        from_email: "contactholymountain@gmail.com",
        subject: "Your receipt from The Holy Mountain webshop",
        message: `Dear ${customer_details.name}, <br/> <br/> Thank you so much for supporting us! Your order will be processed momentarily. <br/> <br/> Your receipt: <br/> ${receipt_url}`,
      };

      // send email to customer with details of their order + receipt url
      try {
        const mail = await sendMail(mailData, customer_details.email);
        console.log(mail.message);
        res.status(200).send();
      } catch (error) {
        console.log("Error with the contacting the mail API: ", error);
        res.status(500).send("Could not send email to customer");
      }
    }
  });

// customer_details should return:
// {
//   address: {
//     city: 'Oslo',
//     country: 'NO',
//     line1: 'Tuengveien 5',
//     line2: null,
//     postal_code: '0374',
//     state: null
//   },
//   email: 'whenaleksbuythings@gmail.com',
//   name: 'Aleksander Tidemann',
//   phone: null,
//   tax_exempt: 'none',
//   tax_ids: []
// }
