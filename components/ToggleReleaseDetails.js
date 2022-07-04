import Button from "./Button";
import Link from "next/link";

const ToggleReleaseDetails = ({ release }) => (
  <Link href={`/${release.key}`} passHref>
    <Button colorStyle={"border-gray-600 hover:border-white text-primary-dark"}>
      Details
    </Button>
  </Link>
);

export default ToggleReleaseDetails;
