import PageTextPoster from "../components/Page/PageTextPoster";
import PageLayout from "../components/Page/PageLayout";
import CoverPhoto from "../components/FrontPage/CoverPhoto";
import { SITE_DOMAIN } from "../config";
import Button from "../components/Button";
import Link from "next/link";

const src = "/img/404.png";
const placeholder = "/img/placeholders/404.png";

const FourOhFour = () => {
  const meta = {
    title: "Oops! You found a missing page! - The Holy Mountain",
    description: "Oops! It looks like this page is lost in space somewhere!",
    url: `${SITE_DOMAIN}/404`,
  };

  return (
    <PageLayout id="404" pageMeta={meta}>
      <CoverPhoto imgSrc={src} placeholder={placeholder} />
      <PageTextPoster>
        <h1 className="text-size-header-big">Lost?</h1>
        <Link href="/" passHref>
          <Button>Go to homepage</Button>
        </Link>
      </PageTextPoster>
    </PageLayout>
  );
};

export default FourOhFour;
