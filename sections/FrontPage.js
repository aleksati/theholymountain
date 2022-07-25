// import PageLayout from "../components/Page/PageLayout";
import PageTextPoster from "../components/Page/PageTextPoster";
import CoverPhoto from "../components/CoverPhoto";
// import AudioPlayer from "../components/AudioPlayer/AudioPlayer";

const src = "/img/cover.png";
const placeholder = "/img/placeholders/cover.png";

const FrontPage = () => {
  return (
    <div className="relative min-h-screen" id="home">
      <CoverPhoto imgSrc={src} placeholder={placeholder} />
      {/* <PageTextPoster>
        <div className="relative w-3/4 m-auto">
          <AudioPlayer />
        </div>
      </PageTextPoster> */}
    </div>
  );
};

export default FrontPage;
