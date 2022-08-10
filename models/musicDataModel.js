import { Schema, model, models } from "mongoose";

const musicDataSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const musicDataModel = models.Test || model("Test", musicDataSchema);

export default musicDataModel;
