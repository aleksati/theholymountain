import { Schema, model, models } from "mongoose";

const schema = new Schema({
  key: String,
  title: String,
  category: String,
  year: String,
  url: String,
});

const VideoData = models.videodata || model("videodata", schema);

export default VideoData;
