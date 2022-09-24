import ImageFullscreen from "../components/ImageFullscreen";
import TextOverImageFullscreen from "../components/TextOverImageFullscreen";
import Link from "next/link";

const src = "/img/cover.png";
const placeholder = "/img/placeholders/cover.png";

const PageFront = () => {
  return (
    <div className="relative min-h-screen" id="home">
      <ImageFullscreen
        imgSrc={src}
        placeholder={placeholder}
        credit="Katinka Hustad"
        creditLink="http://www.katinkahustad.com/"
      />
      <TextOverImageFullscreen>
        <h1 className="font-bold text-9xl">
          {/* <Link className="cursor-pointer hover:underline" href="/awake"> */}
          <b>AWAKE</b>
          {/* </Link> */}
        </h1>
        <h2 className="text-4xl">New Single Out Friday</h2>
      </TextOverImageFullscreen>
    </div>
  );
};

export default PageFront;
