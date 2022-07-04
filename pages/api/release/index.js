import releaseData from "../../../data/releaseData";

export default function handler(req, res) {
  // sort the data in decending order according to year
  const sortedReleaseData = releaseData.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );
  res.status(200).json(sortedReleaseData);
}
