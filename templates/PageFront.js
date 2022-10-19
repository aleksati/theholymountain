import TextOverImageFullscreen from "../components/TextOverImageFullscreen";
import ImageFullscreen from "../components/ImageFullscreen";
import isTouchDevice from "../functions/isTouchDevice";
import Link from "next/link";

const touchSrc = "/img/coverTouch.png";
const desktopSrc = "/img/coverDesktop.png";
const desktopPlaceholder = "/img/placeholders/coverDesktop.png";
const touchPlaceholder = "/img/placeholders/coverTouch.png";

const PageFront = () => {
  const isTouch = isTouchDevice();

  return (
    <div className="relative min-h-screen" id="home">
      <ImageFullscreen
        imgSrc={isTouch ? touchSrc : desktopSrc}
        placeholder={isTouch ? touchPlaceholder : desktopPlaceholder}
        credit="Katinka Hustad"
        creditLink="http://www.katinkahustad.com/"
      />
      <TextOverImageFullscreen>
        <h1 className="font-bold text-8xl sm:text-9xl hover:cursor-pointer hover:underline text-primary-dark">
          <Link href="/awake">
            <b>AWAKE</b>
          </Link>
        </h1>
        <h2 className="text-4xl text-primary-dark">new single now</h2>
      </TextOverImageFullscreen>
    </div>
  );
};

export default PageFront;
