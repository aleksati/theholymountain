import ButtonIconAndText from "./ButtonIconAndText";
import Link from "next/link";

const ButtonTo = ({ icon, path, text }) => {
  return (
    <Link href={path} passHref>
      <ButtonIconAndText iconId={icon} hasTooltip tooltipText={text} />
    </Link>
  );
};

export default ButtonTo;
