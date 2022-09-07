const getClientIP = req => {
  const forwarded = req.headers["x-forwarded-for"];

  const userIP =
    typeof forwarded === "string"
      ? forwarded.split(/,/)
      : req.socket.remoteAddress;

  return userIP;
};

export default getClientIP;
