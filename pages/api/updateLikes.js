import connectMongo from "../../utils/connectMongo";
import MusicData from "../../models/MusicData";

export default async function updateLikes(req, res) {
  if (req.method !== "PUT")
    return res.status(404).json({ message: "Page not found" });

  const releaseKey = req.body.key;
  const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  try {
    await connectMongo();
    const release = await MusicData.findOne({ key: releaseKey });
    const { isMatch, index } = await release.compareLike(userIP);

    isMatch ? await release.removeLike(index) : await release.addLike(userIP);

    const likes = await release.getLikes();

    res.status(200).json({ likes });
  } catch (error) {
    console.log("Error while updating like: ", error.message);
    res.status(500).json(error);
  }
}
