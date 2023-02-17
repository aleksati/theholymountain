import TextOverImageFullscreen from "../components/TextOverImageFullscreen";
import ImageFullscreen from "../components/ImageFullscreen";
import isTouchDevice from "../functions/isTouchDevice";
import Link from "next/link";

// const touchSrc = "/img/coverTouch.png";
// const desktopSrc = "/img/coverDesktop.png";
// const desktopPlaceholder = "/img/placeholders/coverDesktop.png";
// const touchPlaceholder = "/img/placeholders/coverTouch.png";

const touchSrc = "/img/releaseTouch.JPG";
const desktopSrc = "/img/releaseDesktop.JPG";
const desktopPlaceholder = "/img/placeholders/awake.png";
const touchPlaceholder = "/img/placeholders/awake.png";

const PageFront = ({ text2, url }) => {
  const isTouch = isTouchDevice();

  return (
    <div className="relative min-h-screen" id="home">
      <ImageFullscreen
        imgSrc={isTouch ? touchSrc : desktopSrc}
        placeholder={isTouch ? touchPlaceholder : desktopPlaceholder}
        // credit="Katinka Hustad"
        creditLink="http://www.katinkahustad.com/"
      />
      <TextOverImageFullscreen>
        {/* <h1 className="text-6xl sm:text-9xl hover:cursor-pointer hover:underline text-primary-dark">
          <Link href={url ? url : "/awake"}>
            <b>{text1}</b>
          </Link>
        </h1> */}
        <Link href={url ? url : "/awake"}>
          <h2 className="text-2xl text-primary-dark pb-4 hover:cursor-pointer hover:underline">
            {text2}
          </h2>
        </Link>
      </TextOverImageFullscreen>
    </div>
  );
};

export default PageFront;
