import Footer from "../sections/Footer";
import LikesCounter from "../sections/LikesCounter";
import Nav from "../sections/Nav";
import Meta from "./Meta";

const LayoutApp = ({ children, appMeta }) => {
  return (
    <>
      <Meta {...appMeta} />
      <main className="relative flex-grow text-size-regular text-primary-light dark:text-primary-dark bg-primary-light dark:bg-primary-dark">
        {children}
        <Nav />
        {/* <LikesCounter /> */}
      </main>
      <Footer />
    </>
  );
};

export default LayoutApp;
