import connectMongo from "../../utils/connectMongo";
import MusicData from "../../models/MusicData";

export default async function handler(req, res) {
  if (req.method !== "POST") res.status(404).json("Page not found!");

  const releaseKey = req.body.key;
  const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  try {
    await connectMongo();
    const release = await MusicData.findOne({ key: releaseKey });
    const { isMatch } = await release.compareLike(userIP);
    const likesCounter = await release.countLikes();

    return res.status(200).json({
      likesCounter,
      userDoesLike: isMatch,
    });
  } catch (error) {
    console.log("Error while getting likes: ", error.message);
    res.status(500).json(error);
  }
}
