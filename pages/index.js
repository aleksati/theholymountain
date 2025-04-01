import LayoutPage from "../layouts/LayoutPage";
import LandingAlt from "../templates/LandingAlt";
import LandingAlt2 from "../templates/LandingAlt2";

const Home = () => (
  <LayoutPage pageMeta={{ title: "The Holy Mountain" }}>
    <LandingAlt2 />
  </LayoutPage>
);

export default Home;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
