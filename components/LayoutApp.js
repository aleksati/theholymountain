import Meta from "./Meta";
import Nav from "../sections/Nav";
import Footer from "../sections/Footer";

const LayoutApp = ({ children, appMeta }) => {
  return (
    <>
      <Meta {...appMeta} />
      <main className="flex-grow">
        {children}
        <Nav />
      </main>

      <Footer />
    </>
  );
};

export default LayoutApp;
