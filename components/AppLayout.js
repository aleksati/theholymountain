import Footer from "../sections/Footer";
import Nav from "../sections/Nav";
import Meta from "./Meta";

const AppLayout = ({ children, appMeta }) => {
  return (
    <>
      <Meta {...appMeta} />
      <main className="flex-grow text-size-regular text-primary-light dark:text-primary-dark bg-primary-light dark:bg-primary-dark">
        {children}
        <Nav />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
