import SoMeBar from "../components/SoMeBar";
import logoWhite from "../public/img/logo-white.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-2 text-center border-t-2 border-gray-300 dark:border-gray-600 bg-primary-light dark:bg-primary-dark">
      <div className="flex items-center justify-center text-size-small text-primary-light dark:text-primary-dark">
        <div className="space-y-1">
          <p>The Holy Mountain &copy; {new Date().getFullYear()}</p>
          <SoMeBar
            iconSize="text-md"
            exclude={["nothing"]}
            className="justify-center space-x-4"
          />
          <p className="text-secondary text-size-small">
            By <a href="https://github.com/aleksati">Aleksander Tidemann</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
