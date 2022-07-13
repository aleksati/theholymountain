import videoData from "../../../data/videoData";

export default function handler(req, res) {
  // sort the data in decending order according to year
  //   const sortedVideoData = videoData.sort(
  //     (a, b) => Number(b.year) - Number(a.year)
  //   );
  res.status(200).json(videoData);
}
