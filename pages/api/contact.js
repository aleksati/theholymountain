import { commonApiHandlers } from "../../functions/commonApiHandlers.js";
import { initValidation, check, post } from "../../middleware/middlewareApi";
import nextConnect from "next-connect";
import nodemailer from "nodemailer";

// demands as req.body:
// {
//   mailData: { name: "", from_email: "", subject: "", message: "" },
//   recipient: "recipent email address",
// };

const contactValidator = initValidation([
  check("recipient")
    .exists()
    .withMessage("Recipent is missing")
    .isString()
    .withMessage("Recipient must be a string")
    .isEmail()
    .withMessage("Recipient must be email"),
  check("mailData")
    .exists()
    .withMessage("Maildata is missing")
    .notEmpty()
    .withMessage("Maildata is empty")
    .isObject()
    .withMessage("MailData must be an object"),
  check("mailData.name")
    .exists()
    .withMessage("Name is missing")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 3 })
    .withMessage("Name must be over 3 characters"),
  check("mailData.from_email")
    .exists()
    .withMessage("Email is missing")
    .isString()
    .withMessage("Email must be a string")
    .isEmail()
    .withMessage("Email must be email"),
  // check("mailData.bcc").isEmail().withMessage("Bcc must be email"),
  check("mailData.subject")
    .exists()
    .withMessage("Subject is missing")
    .isString()
    .withMessage("Subject must be a string")
    .isLength({ min: 3 })
    .withMessage("Subject must be over 3 characters"),
  check("mailData.message")
    .exists()
    .withMessage("Message is missing")
    .isString()
    .withMessage("Message must be a string")
    .isLength({ min: 3 })
    .withMessage("Message must be over 3 characters"),
]);

export default nextConnect()
  .use(commonApiHandlers)
  .use(post(contactValidator))
  .post(async (req, res) => {
    const { recipient, mailData } = req.body;

    try {
      // I send all emails from my burner email.
      const transporter = nodemailer.createTransport({
        // port: 465,
        // host: "smtp.gmail.com",
        // secure: true,
        service: "gmail",
        auth: {
          user: process.env.BURNERMAIL,
          pass: process.env.BURNERMAIL_APP_PASSWORD,
        },
      });

      let result = await transporter.sendMail({
        from: `${mailData.name} <${process.env.BURNERMAIL}>`,
        to: !recipient ? process.env.BANDMAIL : recipient,
        bcc: !mailData.bcc ? "" : mailData.bcc,
        subject: mailData.subject,
        text: mailData.message,
        html: `<div>${mailData.message} <br/> <br/> With love, <br/> ${mailData.name} <br/> ${mailData.from_email} <br/> Sent from theholymountain.net </div>`,
      });

      res.status(200).json({
        message: "message sent!",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
        error,
      });
    }
  });
