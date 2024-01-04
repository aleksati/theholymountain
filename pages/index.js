import LayoutPage from "../layouts/LayoutPage";
import About from "../templates/About";

const Home = () => (
  <LayoutPage pageMeta={{ title: "The Holy Mountain" }}>
    <About />
  </LayoutPage>
);

export default Home;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
