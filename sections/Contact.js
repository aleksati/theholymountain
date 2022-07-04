import Button from "../components/Button";
import LayoutPage from "../components/LayoutPage";
import Tooltip from "../components/Tooltip";
import Link from "next/link";

const Contact = () => {
  return (
    <LayoutPage id="contact">
      <Link href="#discography" className="text-size-small">
        <a>Go to music</a>
      </Link>
    </LayoutPage>
  );
};

export default Contact;
