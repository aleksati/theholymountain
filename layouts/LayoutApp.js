import GoogleAnalytics from "../components/GoogleAnalytics";

const LayoutApp = ({ children }) => {
  return (
    <>
      <GoogleAnalytics />
      <main className="flex-grow text-lg text-primary-light dark:text-primary-dark bg-primary-light dark:bg-primary-dark">
        {children}
      </main>
    </>
  );
};

export default LayoutApp;
