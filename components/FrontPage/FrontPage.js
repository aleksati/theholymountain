import PageLayout from "../Page/PageLayout";
import CoverPhoto from "./CoverPhoto";
// import PageTextPoster from "./PageTextPoster";

const src = "/img/cover.png";
const placeholder = "/img/placeholders/cover.png";

const FrontPage = () => (
  <PageLayout id="frontpage">
    <CoverPhoto imgSrc={src} placeholder={placeholder} />
  </PageLayout>
);

export default FrontPage;
