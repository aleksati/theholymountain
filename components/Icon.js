import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { SiAudiomack } from "react-icons/si";
import { RiQuestionMark } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { FaBandcamp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { BsSpotify } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const defaultSize = "text-md";

const icons = {
  sun: s => <BsFillSunFill className={s} />,
  moon: s => <BsFillMoonFill className={s} />,
  audio: s => <SiAudiomack className={s} />,
  about: s => <RiQuestionMark className={s} />,
  details: s => <CgDetailsMore className={s} />,
  prevArrow: s => <MdOutlineArrowBackIosNew className={s} />,
  nextArrow: s => <MdOutlineArrowForwardIos className={s} />,
  closeButton: s => <RiCloseLine className={s} />,
  facebook: s => <BsFacebook className={s} />,
  instagram: s => <RiInstagramFill className={s} />,
  bandcamp: s => <FaBandcamp className={s} />,
  youtube: s => <AiFillYoutube className={s} />,
  spotify: s => <BsSpotify className={s} />,
  contact: s => <FiMail className={s} />,
};

const Icon = ({ iconSize, id }) => {
  if (!id) return null;

  const size = iconSize ? iconSize : defaultSize;

  const icon = icons[id];

  return icon(size);
};

export default Icon;
