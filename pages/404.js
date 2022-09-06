import TextPosterPage from "../components/TextPosterPage";
import CoverPhoto from "../components/CoverPhoto";
import { SITE_DOMAIN } from "../config";
import Link from "next/link";
import Meta from "../components/Meta";

const src = "/img/404.png";
const placeholder = "/img/placeholders/404.png";

const FourOhFour = () => {
  const meta = {
    title: "Oops! Missing page!",
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
          creditLink="https://www.katinkahustad.com/"
        />
        <TextPosterPage>
          <h1 className="font-bold text-8xl">Lost?</h1>
          <Link href="/" passHref>
            <a className="p-2 border rounded-full text-size-regular">
              Come Home
            </a>
          </Link>
        </TextPosterPage>
      </div>
    </>
  );
};

export default FourOhFour;
