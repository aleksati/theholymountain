import { SITE_DOMAIN } from "../config";

const sendMail = async data => {
  console.log("Sending message...");
  let res = await fetch(`${SITE_DOMAIN}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export default sendMail;
