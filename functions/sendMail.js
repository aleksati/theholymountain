import { SITE_DOMAIN } from "../config";

// should send:
// {
//   mailData: { name: "", from_email: "", subject: "", message: "" },
//   recipient: "recipent email address",
// };

// used in /api/contact.js and /api/webhooks.js

const sendMail = async (mailData, recipient) => {
  console.log("Sending message..");
  try {
    let res = await fetch(`${SITE_DOMAIN}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient,
        mailData,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return new Error(error);
  }
};

export default sendMail;
