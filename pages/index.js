import LayoutPage from "../layouts/LayoutPage";
import Landing from "../templates/Landing";

//  containerSize="xl"

const Home = () => (
  <LayoutPage pageMeta={{ title: "The Holy Mountain" }} containerSize="xl">
    <Landing />
  </LayoutPage>
);

export default Home;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
