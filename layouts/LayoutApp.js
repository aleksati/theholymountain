import Footer from "../templates/Footer";
import Nav from "../templates/Nav";
import Meta from "../components/Meta";

const LayoutApp = ({ children, appMeta }) => {
  return (
    <>
      <Meta {...appMeta} />
      <main className="relative flex-grow text-size-regular text-primary-light dark:text-primary-dark bg-primary-light dark:bg-primary-dark">
        {children}
        <Nav />
      </main>
      <Footer />
    </>
  );
};

export default LayoutApp;
