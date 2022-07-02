import musicData from "../../../text/musicData";

export default function handler(req, res) {
  res.status(200).json(musicData);
}
