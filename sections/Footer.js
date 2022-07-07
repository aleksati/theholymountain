import SoMeBar from "../components/SoMeBar";
import logoWhite from "../public/img/logo-white.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-3 space-y-2 text-center border-t-2 border-gray-300 dark:border-gray-600 bg-primary-light dark:bg-primary-dark">
      <div className="flex flex-row place-content-evenly text-size-regular text-primary-light dark:text-primary-dark">
        <div>
          <p className="text-secondary">
            By <a href="https://github.com/aleksati">Aleksander Tidemann</a>
          </p>
        </div>
        <div>
          <p>The Holy Mountain &copy; {new Date().getFullYear()}</p>
          <SoMeBar
            iconSize="text-md"
            exclude={["nothing"]}
            className="justify-center space-x-4"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
