import LayoutPage from "../layouts/LayoutPage";
import About from "../templates/About";

// gjør om denne til About

const home = () => {
  return (
    <LayoutPage pageMeta={{ title: "The Holy Mountain" }}>
      <About />
    </LayoutPage>
  );
};

export default home;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
