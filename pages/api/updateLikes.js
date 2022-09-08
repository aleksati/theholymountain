import connectMongo from "../../functions/connectMongo";
import MusicData from "../../models/MusicData";
import getClientIP from "../../functions/getClientIP";

export default async function updateLikes(req, res) {
  if (req.method !== "PUT")
    return res.status(404).json({ message: "Page not found" });

  const releaseKey = req.body.key;
  const clientIP = getClientIP(req);

  try {
    await connectMongo();
    const release = await MusicData.findOne({ key: releaseKey });
    const { isMatch, index } = await release.compareLike(clientIP);

    isMatch ? await release.removeLike(index) : await release.addLike(clientIP);

    const likes = await release.getLikes();

    res.status(200).json({ likes, clientIP });
  } catch (error) {
    console.log("Error while updating like: ", error.message);
    res.status(500).json(error);
  }
}
