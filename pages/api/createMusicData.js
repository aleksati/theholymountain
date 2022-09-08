import connectMongo from "../../functions/connectMongo";
import MusicData from "../../models/MusicData";

// post request. We are creating new data.
export default async function createRelease(req, res) {
  if (req.method !== "POST")
    return res.status(404).json({ message: "Page not found" });
  try {
    await connectMongo();
    const musicData = await MusicData.create(req.body);
    res.json(musicData);
  } catch (error) {
    console.log("Error while creating MusicData: ", error.message);
    res.json(error);
  }
}
