import handlerApi from "../../functions/handlerApi.js";
import { initValidation, check, post } from "../../middleware/middlewareApi";

const contactValidator = initValidation([
  check("name")
    .exists()
    .withMessage("Name is missing")
    .notEmpty()
    .withMessage("Name is empty")
    .isLength({ min: 3 })
    .withMessage("Name must be over 3 characters"),
  check("email")
    .exists()
    .withMessage("Email is missing")
    .notEmpty()
    .withMessage("Email is empty")
    .isEmail()
    .withMessage("Email must be email"),
  check("subject")
    .exists()
    .withMessage("Subject is missing")
    .notEmpty()
    .withMessage("Subject is empty")
    .isLength({ min: 3 })
    .withMessage("Subject must be over 3 characters"),
  check("message")
    .exists()
    .withMessage("Message is missing")
    .notEmpty()
    .withMessage("Message is empty")
    .isLength({ min: 3 })
    .withMessage("Message must be over 3 characters"),
]);

export default handlerApi.use(post(contactValidator)).post(async (req, res) => {
  let data = req.body;
  //   return res.setTimeout(2000, () => res.status(500).send("hey"));

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    // port: 465,
    // secure: true,
    // host: "smtp.gmail.com",
    service: "gmail",
    auth: {
      user: process.env.burnermail,
      pass: process.env.burnermail_app_password,
    },
  });

  let result = await transporter.sendMail({
    from: `${data.name} <${process.env.burnermail}>`,
    to: process.env.bandmail,
    subject: data.subject,
    text: data.message,
    html: `<div>${data.message} <br/> <br/> From, <br/> ${data.name} <br/> ${data.email} <br/> Sent from website contact page </div>`,
  });

  res.status(200).json({
    message: "message sent!",
    data: result,
  });
});
