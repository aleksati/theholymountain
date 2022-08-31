import Button from "./Button";
import Icon from "./Icon";
import Link from "next/link";

const ButtonToDiscography = () => (
  <div className="flex pt-4 pl-4 place-content-start">
    <Link href="/#discography" passHref>
      <Button showTooltip={false} tooltipMessage="Home">
        <Icon id="prevArrow" />
      </Button>
    </Link>
  </div>
);

export default ButtonToDiscography;
