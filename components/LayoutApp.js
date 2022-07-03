import Meta from "./Meta";
import Nav from "./Nav";
import Footer from "../sections/Footer";

const LayoutApp = ({ children }) => {
  return (
    <>
      <Meta />
      <main className="flex-grow ">
        {children}
        <Nav />
      </main>

      <Footer />
    </>
  );
};

export default LayoutApp;
