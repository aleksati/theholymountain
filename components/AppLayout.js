import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import Meta from "./Meta";

const AppLayout = ({ children, appMeta }) => {
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

export default AppLayout;
