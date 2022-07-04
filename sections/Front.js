import LayoutPage from "../components/LayoutPage";
import CoverPhoto from "../components/CoverPhoto";
import CoverTextPoster from "../components/CoverTextPoster";

const img = "/img/cover.jpg";
const placeholder = "/img/placeholders/cover.jpg";

const Front = () => (
  <LayoutPage id="front">
    <CoverPhoto img={img} placeholder={placeholder} />
  </LayoutPage>
);

export default Front;
