import Footer from "../templates/Footer";
import Nav from "../templates/Nav";
import Meta from "../components/Meta";
import { useEffect } from "react";

const LayoutApp = ({ children, appMeta }) => {
  // to try and combat pages not rendering at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
