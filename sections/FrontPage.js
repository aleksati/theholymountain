import CoverPhoto from "../components/CoverPhoto";
// import PageTextPoster from "../components/Page/PageTextPoster";
import Link from "next/link";

const src = "/img/cover.png";
const placeholder = "/img/placeholders/cover.png";

const FrontPage = () => {
  return (
    <div className="relative min-h-screen" id="home">
      <CoverPhoto
        imgSrc={src}
        placeholder={placeholder}
        credit="Katinka Hustad"
        creditLink="http://www.katinkahustad.com/"
      />
      {/* <PageTextPoster>
        <h1 className="text-8xl text-primary-dark">
          New Single <br />
          <Link href="/awake">
            <b className="cursor-pointer hover:underline">AWAKE</b>
          </Link>
          <br />
          Out Now
        </h1>
      </PageTextPoster> */}
    </div>
  );
};

export default FrontPage;
