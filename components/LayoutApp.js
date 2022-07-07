import Meta from "./Meta";
import Footer from "../sections/Footer";

const LayoutApp = ({ children, appMeta }) => {
  return (
    <>
      <Meta {...appMeta} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutApp;
