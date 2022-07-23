// import PageLayout from "../components/Page/PageLayout";
// import PageTextPoster from "./PageTextPoster";
import CoverPhoto from "../components/CoverPhoto";

const src = "/img/cover.png";
const placeholder = "/img/placeholders/cover.png";

const FrontPage = () => (
  <div className="relative min-h-screen" id="home">
    <CoverPhoto imgSrc={src} placeholder={placeholder} />
  </div>
);

export default FrontPage;
