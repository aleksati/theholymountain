import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { SiAudiomack } from "react-icons/si";
import { RiQuestionMark } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

const defaultSize = "text-md";

const icons = {
  sun: s => <BsFillSunFill className={s} />,
  moon: s => <BsFillMoonFill className={s} />,
  audio: s => <SiAudiomack className={s} />,
  about: s => <RiQuestionMark className={s} />,
  details: s => <CgDetailsMore className={s} />,
  prevArrow: s => <MdKeyboardArrowLeft className={s} />,
  nextArrow: s => <MdKeyboardArrowRight className={s} />,
  closeButton: s => <RiCloseLine className={s} />,
};

const Icon = ({ iconSize, id }) => {
  if (!id) return null;

  const size = iconSize ? iconSize : defaultSize;

  const icon = icons[id];

  return icon(size);
};

export default Icon;
