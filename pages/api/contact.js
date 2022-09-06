export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(404).send("Page not found");

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

  try {
    let result = await transporter.sendMail({
      from: `${data.name} <${process.env.burnermail}>`,
      to: process.env.bandmail,
      subject: data.subject,
      text: data.message,
      html: `<div>${data.message} <br/> <br/> From, <br/> ${data.name} <br/> ${data.email} <br/> Sent from website contact page </div>`,
    });
    return res.status(200).send("Message sent: " + result.messageId);
  } catch (error) {
    return res.status(500).send(error);
  }
}
