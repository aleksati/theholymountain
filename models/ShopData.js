import { Schema, model, models, Number } from "mongoose";

const reqString = {
  type: String,
  required: true,
};

const schema = new Schema({
  key: reqString,
  title: reqString,
  year: reqString,
  price: reqString,
  description: reqString,
  shopQuantity: Number,
  userQuantity: Number,
  // shopSizes: [], if these are enabled, they are applied to all the items..
  // userSize: String,
});

const ShopData = models.shopdata || model("shopdata", schema);

export default ShopData;
