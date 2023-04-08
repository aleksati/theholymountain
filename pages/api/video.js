import nextConnect from "next-connect";
import connectMongo from "../../functions/connectMongo";
import VideoData from "../../models/VideoData";
import { commonApiHandlers } from "../../functions/commonApiHandlers.js";
import {
  initValidation,
  check,
  oneOf,
  post,
  put,
  del,
} from "../../middleware/middlewareApi";

const videoPostValidator = initValidation([
  check("key")
    .exists()
    .withMessage("Key is missing")
    .trim()
    .notEmpty()
    .withMessage("key is empty")
    .isLength({ min: 3 })
    .withMessage("Key must be over 3 characters"),
  check("title")
    .exists()
    .withMessage("Title is missing")
    .trim()
    .notEmpty()
    .withMessage("title is empty")
    .isLength({ min: 3 })
    .withMessage("Title must be over 3 characters"),
  check("type")
    .exists()
    .withMessage("Type is missing")
    .trim()
    .notEmpty()
    .withMessage("Type is empty")
    .isLength({ min: 3 })
    .withMessage("Type must be over 3 characters")
    .equals("video")
    .withMessage("Type should be music"),
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
    .trim()
    .notEmpty()
    .withMessage("year is empty")
    .isLength({ min: 3 })
    .withMessage("year must be over 3 characters"),
  check("url")
    .exists()
    .withMessage("Url is missing")
    .trim()
    .notEmpty()
    .withMessage("url is empty")
    .isLength({ min: 3 })
    .withMessage("url must be over 3 characters"),
]);

const videoDeleteValidator = initValidation([
  check("key")
    .exists()
    .withMessage("Key is missing")
    .trim()
    .notEmpty()
    .withMessage("key is empty")
    .isLength({ min: 3 })
    .withMessage("Key must be over 3 characters"),
]);

const videoPutValidator = initValidation([
  check("key")
    .exists()
    .withMessage("Key is missing")
    .trim()
    .notEmpty()
    .withMessage("key is empty")
    .isLength({ min: 3 })
    .withMessage("Key must be over 3 characters"),
  oneOf([
    check("title")
      .exists()
      .withMessage("Title is missing")
      .trim()
      .notEmpty()
      .withMessage("title is empty")
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
      .trim()
      .notEmpty()
      .withMessage("year is empty")
      .isLength({ min: 3 })
      .withMessage("year must be over 3 characters"),
    check("url")
      .exists()
      .withMessage("Url is missing")
      .trim()
      .notEmpty()
      .withMessage("url is empty")
      .isLength({ min: 3 })
      .withMessage("url must be over 3 characters"),
    check("type")
      .exists()
      .withMessage("Type is missing")
      .trim()
      .notEmpty()
      .withMessage("Type is empty")
      .equals("video")
      .withMessage("Type should be music"),
  ]),
]);

export default nextConnect()
  .use(commonApiHandlers)
  .use(post(videoPostValidator))
  .use(del(videoDeleteValidator))
  .use(put(videoPutValidator))
  .get(async (req, res) => {
    await connectMongo();
    const videoData = await VideoData.find();

    if (!videoData.length)
      throw new Error(`No videoData collections were found`);

    res.status(200).json({
      message: `videoData retrieved`,
      data: videoData,
    });
  })
  .post(async (req, res) => {
    await connectMongo();
    const videoData = await VideoData.create(req.body);

    res.status(201).json({
      message: `VideoData ${req.body.key} was created`,
      data: videoData,
    });
  })
  .delete(async (req, res) => {
    await connectMongo();
    const { deletedCount } = await VideoData.deleteOne({ key: req.body.key });

    if (deletedCount === 0)
      throw new Error(
        `VideoData ${req.body.key} was not found and cannot be deleted.`
      );

    res.status(200).json({ message: `VideoData ${req.body.key} was removed` });
  })
  .put(async (req, res) => {
    await connectMongo();

    const filter = { key: req.body.key };
    const update = { ...req.body };
    delete update.key;

    const doc = await VideoData.findOneAndUpdate(filter, update);

    if (!doc) throw new Error("data not found ...");

    await doc.save();

    res.status(200).json(doc);
  });
