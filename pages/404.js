import CoverTextPoster from "../components/CoverTextPoster";
import LayoutPage from "../components/LayoutPage";
import CoverPhoto from "../components/CoverPhoto";
import Button from "../components/Button";
import Link from "next/link";

const src = "/img/404.png";
const placeholder = "/img/placeholders/404.png";

const FourOhFour = () => {
  const meta = {
    title: "Oops! You found a missing page! - The Holy Mountain",
    description: "Oops! It looks like this page is lost in space somewhere!",
    // url: `${SITE_DOMAIN}/404`,
  };

  return (
    <LayoutPage id="404" pageMeta={meta}>
      <CoverPhoto imgSrc={src} placeholder={placeholder} />
      <CoverTextPoster>
        <h1 className="text-size-header-big">Lost?</h1>
        <Link href="/" passHref>
          <Button>Go to homepage</Button>
        </Link>
      </CoverTextPoster>
    </LayoutPage>
  );
};

export default FourOhFour;