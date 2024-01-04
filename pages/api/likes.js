import { commonApiHandlers } from "../../functions/commonApiHandlers.js";
import connectMongo from "../../functions/connectMongo";
import getClientIP from "../../functions/getClientIP";
import MusicData from "../../models/MusicData";
import nextConnect from "next-connect";
import {
  initValidation,
  check,
  patch,
  post,
} from "../../middleware/middlewareApi";

const postValidator = initValidation([
  check("key").exists().withMessage("Key is missing").trim(),
]);

const patchValidator = initValidation([
  check("key").exists().withMessage("Key is missing").trim(),
  check("state")
    .exists()
    .withMessage("Key is missing")
    .isBoolean()
    .withMessage("State must be boolean"),
]);

export default nextConnect()
  .use(commonApiHandlers)
  .use(post(postValidator))
  .use(patch(patchValidator))
  // get likes
  .post(async (req, res) => {
    // Should optimally be a "get" method with params
    const { key } = req.body;
    const clientIP = getClientIP(req);

    await connectMongo();

    const release = await MusicData.findOne({ key });
    if (!release) throw new Error("Error while fetching likes. Key not found!");

    const { isMatch } = await release.compareLike(clientIP);
    const likesCounter = await release.countLikes();

    res.status(200).json({
      key,
      likesCounter,
      client: {
        ip: clientIP,
        likesRelease: isMatch,
      },
    });
  })
  // update likes
  .patch(async (req, res) => {
    const { key, state } = req.body;
    const clientIP = getClientIP(req);

    await connectMongo();

    const release = await MusicData.findOne({ key });
    if (!release) throw new Error("Error while updating likes. Key not found!");

    const { isMatch, index } = await release.compareLike(clientIP);

    // if the states in the browser and db are different
    if (state !== isMatch) {
      if (state) {
        await release.addLike(clientIP);
      } else {
        await release.removeLike(index);
      }
    }

    res.status(200).json({
      key,
      client: {
        ip: clientIP,
        likesRelease: state,
      },
    });
  });
