import connectMongo from "../../functions/connectMongo";
import MusicData from "../../models/MusicData";
import getClientIP from "../../functions/getClientIP";
import handlerApi from "../../functions/handlerApi.js";
import {
  initValidation,
  check,
  patch,
  post,
} from "../../middleware/middlewareApi";

const likesValidator = initValidation([
  check("key")
    .exists()
    .withMessage("Key is missing")
    .trim()
    .notEmpty()
    .withMessage("key is empty")
    .isLength({ min: 3 })
    .withMessage("Key must be over 3 characters"),
]);

export default handlerApi
  .use(post(likesValidator))
  .use(patch(likesValidator))
  .post(async (req, res) => {
    // Should optimally be a "get" method with params
    const releaseKey = req.body.key;
    const clientIP = getClientIP(req);

    await connectMongo();
    const release = await MusicData.findOne({ key: releaseKey });

    if (!release) throw new Error("Error while getting likes. Key not found!");

    const { isMatch } = await release.compareLike(clientIP);
    const likesCounter = await release.countLikes();

    res.status(200).json({
      key: releaseKey,
      likesCounter,
      client: {
        ip: clientIP,
        likesRelease: isMatch,
      },
    });
  })
  .patch(async (req, res) => {
    const releaseKey = req.body.key;
    const clientIP = getClientIP(req);

    await connectMongo();
    const release = await MusicData.findOne({ key: releaseKey });

    if (!release) throw new Error("Error while updating likes. Key not found!");

    const { isMatch, index } = await release.compareLike(clientIP);

    isMatch ? await release.removeLike(index) : await release.addLike(clientIP);

    const likesCounter = await release.countLikes();

    res.status(200).json({
      key: releaseKey,
      likesCounter,
      client: {
        ip: clientIP,
        likesRelease: !isMatch,
      },
    });
  });
