import { commonApiHandlers } from "../../functions/commonApiHandlers.js";
import { initValidation, check, post } from "../../middleware/middlewareApi";
import nextConnect from "next-connect";
import nodemailer from "nodemailer";

// demands as req.body:
// {
//   mailData: { name: "", email: "", subject: "", message: "" },
//   to: "recipent email address",
// };

const contactValidator = initValidation([
  check("to")
    .exists()
    .withMessage("Recipent (to) is missing")
    .isString()
    .withMessage("Recipient (to) must be a string"),
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
    .notEmpty()
    .withMessage("Name is empty")
    .isLength({ min: 3 })
    .withMessage("Name must be over 3 characters"),
  check("mailData.email")
    .exists()
    .withMessage("Email is missing")
    .notEmpty()
    .withMessage("Email is empty")
    .isEmail()
    .withMessage("Email must be email"),
  check("mailData.subject")
    .exists()
    .withMessage("Subject is missing")
    .notEmpty()
    .withMessage("Subject is empty")
    .isLength({ min: 3 })
    .withMessage("Subject must be over 3 characters"),
  check("mailData.message")
    .exists()
    .withMessage("Message is missing")
    .notEmpty()
    .withMessage("Message is empty")
    .isLength({ min: 3 })
    .withMessage("Message must be over 3 characters"),
]);

export default nextConnect()
  .use(commonApiHandlers)
  .use(post(contactValidator))
  .post(async (req, res) => {
    let data = req.body;
    let recipient = data.to;
    let mailData = data.mailData;

    // I send all emails from my burner email.
    const transporter = nodemailer.createTransport({
      // port: 465,
      // secure: true,
      // host: "smtp.gmail.com",
      service: "gmail",
      auth: {
        user: process.env.BURNERMAIL,
        pass: process.env.BURNERMAIL_APP_PASSWORD,
      },
    });

    let result = await transporter.sendMail({
      from: `${mailData.name} <${process.env.BURNERMAIL}>`,
      to: !recipient ? process.env.BANDMAIL : recipient,
      subject: mailData.subject,
      text: mailData.message,
      html: `<div>${mailData.message} <br/> <br/> From, <br/> ${mailData.name} <br/> ${mailData.from_email} <br/> Sent from theholymountain.net </div>`,
    });

    res.status(200).json({
      message: "message sent!",
      data: result,
    });
  });
