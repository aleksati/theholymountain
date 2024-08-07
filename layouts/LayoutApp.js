import GoogleAnalytics from "../components/GoogleAnalytics";

const LayoutApp = ({ children }) => {
  return (
    <>
      <GoogleAnalytics />
      <main className="flex-grow text-base text-primary-dark bg-primary-dark">
        {children}
      </main>
    </>
  );
};

export default LayoutApp;
