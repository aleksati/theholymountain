import ButtonIconAndText from "./ButtonIconAndText";
import Link from "next/link";

const ButtonBackTo = () => {
  return (
    <div className="flex pt-4 pl-4 place-content-start">
      <Link href={"/#stuff"} passHref>
        <ButtonIconAndText iconId="prevArrow" hasTooltip tooltipText="Back" />
      </Link>
    </div>
  );
};

export default ButtonBackTo;
