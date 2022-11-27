import { SITE_DOMAIN } from "../config";

// demands as mailData:
// {
//   to: "recipent email address",
//   mailData: { name: "", from_email: "", subject: "", message: "" },
// };

// used in /api/contact.js and /api/webhooks.js

const sendMail = async (mailData, to = "") => {
  console.log("Sending message..");
  try {
    let res = await fetch(`${SITE_DOMAIN}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to,
        mailData,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default sendMail;
