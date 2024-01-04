import LayoutPage from "../layouts/LayoutPage";
import About from "../templates/About";

const about = () => (
  <LayoutPage pageMeta={{ title: "The Holy Mountain" }}>
    <About />
  </LayoutPage>
);

export default about;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
