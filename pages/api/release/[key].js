import releaseData from "../../../data/releaseData";

export default function handler({ query: { key } }, res) {
  const filtered = releaseData.filter(release => release.key === key);
  if (filtered.length > 0) return res.status(200).json(filtered[0]);
  return res
    .status(404)
    .json({ message: `Article with the key of ${key} is not found` });
}
