import GoogleAnalytics from "../components/GoogleAnalytics";
import Footer from "../components/Footer";

const LayoutApp = ({ children }) => {
  return (
    <>
      <GoogleAnalytics />
      <main className="flex-grow text-base text-primary-dark bg-primary-dark">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default LayoutApp;
