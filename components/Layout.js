import Meta from "./Meta";
import Nav from "./Nav";
import Footer from "../sections/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="relative">
        <main className="flex-grow">
          {children}
          <Nav />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
