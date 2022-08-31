import connectMongo from "../../../utils/connectMongo";
import findHash from "../../../utils/findHash";
import hashIP from "../../../utils/hashIP";
import Likes from "../../../models/Likes";

// if the hashed IP exists in the database, remove it
// if the hashed IP does not exist in the database, add it

export default async function handler(req, res) {
  if (req.method !== "POST") res.status(404).json("Page not found!");

  try {
    const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    await connectMongo();

    const likes = await Likes.find();

    const { isMatch, id } = await findHash(likes, userIP);

    let isAdded;

    if (!isMatch) {
      // add hashed IP to db
      const hash = await hashIP(userIP);
      await Likes.create({ ip_hash: hash });
      isAdded = true;
    } else {
      // remove hashed IP from db.
      await Likes.deleteOne({ _id: id });
      isAdded = false;
    }

    res.status(200).json({ data: isAdded, isError: null });
  } catch (error) {
    res.status(500).json({ data: null, isError: error.message });
  }
}
