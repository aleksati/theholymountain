import LayoutPage from "../components/LayoutPage";
import CoverPhoto from "../components/CoverPhoto";
import CoverTextPoster from "../components/CoverTextPoster";

const src = "/img/cover.png";
const placeholder = "/img/placeholders/cover.png";

const Front = () => (
  <LayoutPage id="front">
    <CoverPhoto imgSrc={src} placeholder={placeholder} />
  </LayoutPage>
);

export default Front;
