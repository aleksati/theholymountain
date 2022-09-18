import nextConnect from "next-connect";
import connectMongo from "../../functions/connectMongo";
import MusicData from "../../models/MusicData";
import { commonApiHandlers } from "../../functions/commonApiHandlers.js";
import {
  initValidation,
  check,
  post,
  del,
} from "../../middleware/middlewareApi";

const musicPostValidator = initValidation([
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
  check("category")
    .exists()
    .withMessage("Category is missing")
    .trim()
    .notEmpty()
    .withMessage("category is empty")
    .isLength({ min: 3 })
    .withMessage("Category must be over 3 characters"),
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
  check("formatText")
    .exists()
    .withMessage("FormatText is missing")
    .notEmpty()
    .withMessage("FormatText is empty")
    .isLength({ min: 3 })
    .withMessage("FormatText must be over 3 characters"),
  check("price")
    .exists()
    .withMessage("Price is missing")
    .notEmpty()
    .withMessage("Price is empty")
    .isLength({ min: 2 })
    .withMessage("Price must be over 2 characters"),
  check("formats")
    .exists()
    .withMessage("Formats is missing")
    .isArray({ min: 1 })
    .withMessage("Formats must be array"),
  check("slideshow")
    .exists()
    .withMessage("Slideshow is missing")
    .isArray({ min: 1 })
    .withMessage("Slideshow must be array"),
  check("likes")
    .exists()
    .withMessage("Likes is missing")
    .isArray()
    .withMessage("Formats must be array"),
  check("credits")
    .exists()
    .withMessage("Credits is missing")
    .isArray({ min: 1 })
    .withMessage("Credits must be array"),
]);

const musicDeleteValidator = initValidation([
  check("key")
    .exists()
    .withMessage("Key is missing")
    .trim()
    .notEmpty()
    .withMessage("key is empty")
    .isLength({ min: 3 })
    .withMessage("Key must be over 3 characters"),
]);

export default nextConnect()
  .use(commonApiHandlers)
  .use(post(musicPostValidator))
  .use(del(musicDeleteValidator))
  .get(async (req, res) => {
    await connectMongo();
    const musicData = await MusicData.find();

    if (!musicData.length) throw new Error(`No musicData was found`);

    res.status(200).json({
      message: `MusicData retrieved`,
      data: musicData,
    });
  })
  .post(async (req, res) => {
    await connectMongo();
    const musicData = await MusicData.create(req.body);

    res.status(201).json({
      message: `musicData ${req.body.key} was created`,
      data: musicData,
    });
  })
  .delete(async (req, res) => {
    await connectMongo();
    const { deletedCount } = await MusicData.deleteOne({ key: req.body.key });

    if (deletedCount === 0)
      throw new Error(
        `MusicData ${req.body.key} was not found and cannot be deleted.`
      );

    res.status(200).json({ message: `MusicData ${req.body.key} was removed` });
  });
