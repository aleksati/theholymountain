import LayoutPage from "../layouts/LayoutPage";
import Landing from "../templates/Landing";

const Home = () => (
  <LayoutPage containerSize="xl" pageMeta={{ title: "The Holy Mountain" }}>
    <Landing />
  </LayoutPage>
);

export default Home;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
