import connectMongo from "../../functions/connectMongo";
import MusicData from "../../models/MusicData";
import getClientIP from "../../functions/getClientIP";

export default async function handler(req, res) {
  if (req.method !== "POST") res.status(404).json("Page not found!");

  const releaseKey = req.body.key;
  const clientIP = getClientIP(req);

  try {
    await connectMongo();
    const release = await MusicData.findOne({ key: releaseKey });
    const { isMatch } = await release.compareLike(clientIP);
    const likesCounter = await release.countLikes();

    return res.status(200).json({
      likesCounter,
      userDoesLike: isMatch,
      clientIP,
    });
  } catch (error) {
    console.log("Error while getting likes: ", error.message);
    res.status(500).json(error);
  }
}
