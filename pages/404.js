import TextOverImageFullscreen from "../components/TextOverImageFullscreen";
import ImageFullscreen from "../components/ImageFullscreen";
import { SITE_DOMAIN } from "../config";
import Meta from "../components/Meta";
import Link from "next/link";

const src = "/img/404.png";
const placeholder = "/img/placeholders/404.png";

const FourOhFour = () => (
  <>
    <Meta
      title="Oops! Missing page!"
      description="Oops! It looks like this page is lost in space somewhere!"
      url={`${SITE_DOMAIN}/404`}
    />
    <div className="relative min-h-screen" id="404">
      <ImageFullscreen
        imgSrc={src}
        placeholder={placeholder}
        credit="Katinka Hustad"
        creditLink="https://www.katinkahustad.com/"
      />
      <TextOverImageFullscreen>
        <Link href="/" passHref>
          <h1 className="font-bold text-primary-dark hover:underline hover:cursor-pointer text-9xl">
            Lost?
          </h1>
        </Link>
      </TextOverImageFullscreen>
    </div>
  </>
);

export default FourOhFour;
