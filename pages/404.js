import CoverTextPoster from "../components/CoverTextPoster";
import LayoutPage from "../components/LayoutPage";
import CoverPhoto from "../components/CoverPhoto";
import Button from "../components/Button";
import Link from "next/link";

const img = "/img/404.png";
const placeholder = "/img/placeholders/cover.jpg";

const FourOhFour = () => {
  const meta = {
    title: "Oops! You found a missing page! - The Holy Mountain",
    description: "Oops! It looks like this page is lost in space somewhere!",
    // url: `${SITE_DOMAIN}/404`,
  };
  return (
    <LayoutPage id="404" pageMeta={meta}>
      <CoverPhoto img={img} placeholder={placeholder} />
      <CoverTextPoster>
        <h1 className="text-size-header-big">Page Not Found</h1>
        <Link href="/" passHref>
          <Button>Homepage</Button>
        </Link>
      </CoverTextPoster>
    </LayoutPage>
  );
};

export default FourOhFour;
