import LayoutPage from "../components/LayoutPage";
import CoverPhoto from "../components/CoverPhoto";
import CoverTextPoster from "../components/CoverTextPoster";

const src = "/img/cover.jpg";
const placeholder = "/img/placeholders/cover.jpg";

const Front = () => (
  <LayoutPage id="front">
    <CoverPhoto imgSrc={src} placeholder={placeholder} />
  </LayoutPage>
);

export default Front;
