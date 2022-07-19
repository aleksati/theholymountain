import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import Meta from "./Meta";

const AppLayout = ({ children, appMeta }) => {
  return (
    <>
      <Meta {...appMeta} />
      <main className="flex-grow">
        <div className="divide-y divide-secondary-skin-light dark:divide-secondary-skin-dark">
          {children}
        </div>
        <Nav />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
