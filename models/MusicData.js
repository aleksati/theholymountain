import { Schema, model, models } from "mongoose";

const schema = new Schema({
  type: String,
  key: String,
  title: String,
  year: String,
  category: String,
  formats: [String],
  price: String,
  text: String,
  credits: [String],
  slideshow: [String],
  spotifyurl: String,
  previewurl: String,
  buyurl: String,
});

const MusicData = models.musicdata || model("musicdata", schema);

export default MusicData;