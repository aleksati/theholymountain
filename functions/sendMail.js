import { SITE_DOMAIN } from "../config";

// demands as mailData:
// {
//   to: "recipent email address",
//   mailData: { name: "", email: "", subject: "", message: "" },
// };

// used in /api/contact.js and /api/webhooks.js

const sendMail = async (mailData, to = "") => {
  console.log("Sending message..");
  let res = await fetch(`${SITE_DOMAIN}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mailData,
      to,
    }),
  });

  return await res.json();
};

export default sendMail;
