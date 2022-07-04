import SoMeBar from "../components/SoMeBar";

const Footer = () => {
  return (
    <footer className="py-3 space-y-2 text-center border-t-2 border-gray-300 dark:border-gray-600 bg-primary-light dark:bg-primary-dark">
      <span className="mr-2 text-size-small text-secondary-light dark:text-secondary-dark">
        The Holy Mountain &copy; {new Date().getFullYear()}
      </span>
      <SoMeBar
        iconSize="text-sm"
        exclude={["nothing"]}
        className="justify-center space-x-4"
      />
    </footer>
  );
};

export default Footer;
