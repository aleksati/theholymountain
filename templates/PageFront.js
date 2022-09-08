import ImageFullscreen from "../components/ImageFullscreen";
// import TextOverImageFullscreen from "../components/TextOverImageFullscreen";
// import Link from "next/link";

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
      {/* <TextOverImageFullscreen>
        <h1 className="text-8xl text-primary-dark">
          New Single <br />
          <Link href="/awake">
            <b className="cursor-pointer hover:underline">AWAKE</b>
          </Link>
          <br />
          Out Now
        </h1>
      </TextOverImageFullscreen> */}
    </div>
  );
};

export default PageFront;
