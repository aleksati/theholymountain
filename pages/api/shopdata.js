import nextConnect from "next-connect";
import connectMongo from "../../functions/connectMongo.js";
import ShopData from "../../models/ShopData.js";
import { commonApiHandlers } from "../../functions/commonApiHandlers.js";
import {
  initValidation,
  check,
  post,
  del,
  put,
  oneOf,
} from "../../middleware/middlewareApi.js";

const shopPostValidator = initValidation([
  check("key")
    .exists()
    .withMessage("Key is missing")
    .trim()
    .notEmpty()
    .withMessage("Key is empty")
    .isLength({ min: 3 })
    .withMessage("Key must be over 3 characters"),
  check("title")
    .exists()
    .withMessage("Title is missing")
    .trim()
    .notEmpty()
    .withMessage("Title is empty")
    .isLength({ min: 3 })
    .withMessage("Title must be over 3 characters"),
  check("year")
    .exists()
    .withMessage("Year is missing")
    .notEmpty()
    .withMessage("Year is empty")
    .isLength({ min: 3 })
    .withMessage("Year must be over 3 characters"),
  check("description")
    .exists()
    .withMessage("Description is missing")
    .notEmpty()
    .withMessage("Description is empty")
    .isLength({ min: 3 })
    .withMessage("Description must be over 3 characters"),
  check("price")
    .exists()
    .withMessage("Price is missing")
    .notEmpty()
    .withMessage("Price is empty"),
]);

const shopDeleteValidator = initValidation([
  check("key")
    .exists()
    .withMessage("Key is missing")
    .trim()
    .notEmpty()
    .withMessage("key is empty")
    .isLength({ min: 3 })
    .withMessage("Key must be over 3 characters"),
]);

const shopPutValidator = initValidation([
  check("key")
    .exists()
    .withMessage("Key is missing")
    .trim()
    .notEmpty()
    .withMessage("key is empty"),
  oneOf([
    check("title").exists().withMessage("Title is required"),
    check("year").exists().withMessage("Year is missing"),
    check("description").exists().withMessage("Description is missing"),
    check("price").exists().withMessage("Price is missing"),
    check("shopQuantity").exists().withMessage("shopQuantity is missing"),
    check("UserQuantity").exists().withMessage("userQuantity is missing"),
    check("shopSizes").exists().withMessage("shopSizes is missing"),
    check("userSize").exists().withMessage("userSize is missing"),
  ]),
]);

export default nextConnect()
  .use(commonApiHandlers)
  .use(post(shopPostValidator))
  .use(del(shopDeleteValidator))
  .use(put(shopPutValidator))
  .get(async (req, res) => {
    await connectMongo();

    let shopData;

    if (req.query.key) {
      let key = req.query.key;
      shopData = await ShopData.findOne({ key });
    } else {
      shopData = await ShopData.find();
    }

    if (!shopData) throw new Error(`No shopdata was found`);

    res.status(200).json(shopData);
  })
  .post(async (req, res) => {
    await connectMongo();
    const musicData = await ShopData.create(req.body);

    res.status(201).json(musicData);
  })
  .delete(async (req, res) => {
    await connectMongo();
    const { deletedCount } = await ShopData.deleteOne({ key: req.body.key });

    if (deletedCount === 0)
      throw new Error(
        `ShopData ${req.body.key} was not found and cannot be deleted.`
      );

    res.status(200).json({ message: `ShopData ${req.body.key} was removed` });
  })
  .put(async (req, res) => {
    await connectMongo();

    const filter = { key: req.body.key };
    const update = { ...req.body };
    delete update.key;

    const doc = await ShopData.findOneAndUpdate(filter, update);

    if (!doc) throw new Error("data not found ...");

    await doc.save();

    res.status(200).json(doc);
  });
