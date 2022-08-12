import PageTextPoster from "../components/Page/PageTextPoster";
import CoverPhoto from "../components/CoverPhoto";
import { SITE_DOMAIN } from "../config";
import Link from "next/link";
import Meta from "../components/Meta";

const src = "/img/404.png";
const placeholder = "/img/placeholders/404.png";

const FourOhFour = () => {
  const meta = {
    title: "Oops! You found a missing page! - The Holy Mountain",
    description: "Oops! It looks like this page is lost in space somewhere!",
    url: `${SITE_DOMAIN}/404`,
  };

  return (
    <>
      <Meta {...meta} />
      <div className="relative min-h-screen" id="404">
        <CoverPhoto
          imgSrc={src}
          placeholder={placeholder}
          credit="Katinka Hustad"
          creditLink="http://www.katinkahustad.com/"
        />
        <PageTextPoster>
          <h1 className="font-bold text-size-header-big">Lost?</h1>
          <Link href="/" passHref>
            <a className="p-2 border rounded-full text-size-regular">
              Homepage
            </a>
          </Link>
        </PageTextPoster>
      </div>
    </>
  );
};

export default FourOhFour;
