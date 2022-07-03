import musicData from "../../../text/musicData";

export default function handler(req, res) {
  // sort the data in decending order according to year
  const sortedMusicData = musicData.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );
  res.status(200).json(musicData);
}
