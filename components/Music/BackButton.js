import Button from "../Button";
import Icon from "../Icon";
import Link from "next/link";

const BackButton = ({ text }) => (
  <div className="flex pt-4 pl-4 place-content-start">
    <Link href="/#discography" passHref>
      <Button>
        <Icon id="prevArrow" />
      </Button>
    </Link>
  </div>
);

export default BackButton;
