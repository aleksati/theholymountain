import { Schema, model, models } from "mongoose";

const schema = new Schema({
  ip_hash: {
    type: String,
    required: true,
  },
});

const Likes = models.likes || model("likes", schema);

export default Likes;
