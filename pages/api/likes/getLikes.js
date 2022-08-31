import connectMongo from "../../../utils/connectMongo";
import Likes from "../../../models/Likes";
import findHash from "../../../utils/findHash";

export default async function handler(req, res) {
  if (req.method !== "GET") res.status(404).json("Page not found!");

  try {
    const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    await connectMongo();

    const likes = await Likes.find();

    const { isMatch } = await findHash(likes, userIP);

    return res.status(200).json({
      likes_amount: likes.length,
      userDoesLike: isMatch,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}
