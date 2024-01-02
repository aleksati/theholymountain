import { Schema, model, models, Number } from "mongoose";

const reqString = {
  type: String,
  required: true,
};

const schema = new Schema({
  key: reqString,
  title: reqString,
  year: reqString,
  price: String,
  description: reqString,
  quantity: Number,
});

const ShopData = models.shopdata || model("shopdata", schema);

export default ShopData;
