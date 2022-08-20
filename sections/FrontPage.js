import CoverPhoto from "../components/CoverPhoto";
// import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
// import PageTextPoster from "../components/Page/PageTextPoster";

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
        <h1 className="text-size-header-big text-primary-dark">Coming Soon!</h1>
        <div className="relative w-full">
          <AudioPlayer />
        </div>
      </PageTextPoster> */}
    </div>
  );
};

export default FrontPage;
