import connectMongo from "../../utils/connectMongo";
import VideoData from "../../models/VideoData";

// post request. We are creating new data.
export default async function createVideoData(req, res) {
  if (req.method !== "POST")
    return res.status(404).json({ message: "Page not found" });
  try {
    await connectMongo();
    const videoData = await VideoData.create(req.body);
    res.json(videoData);
  } catch (error) {
    console.log("Error while creating VideoData: ", error.message);
    res.json(error);
  }
}
