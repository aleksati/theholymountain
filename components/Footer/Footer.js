import SoMeBar from "../SoMeBar";
import Button from "../Button";
import Nav from "../Nav/Nav";

const Footer = () => (
  <footer className="z-0 py-4 border-gray-300 border-t-1 dark:border-gray-600 bg-primary-light dark:bg-primary-dark brightness-95">
    <div className="flex ml-4 mr-4 place-content-between text-size-small sm:text-size-regular text-primary-light dark:text-primary-dark">
      <div className="hidden mt-2 lg:flex">
        <SoMeBar
          iconSize="text-3xl"
          exclude={["nothing"]}
          className="justify-center space-x-4"
        />
      </div>
      <div className="space-y-1 text-center">
        <p> The Holy Mountain &copy; {new Date().getFullYear()}</p>
        <a className="text-secondary" href="https://github.com/aleksati">
          By Aleksander Tidemann
        </a>
      </div>
      <div className="invisible">
        <Nav className="flex space-x-2" reportBtnVisibility={""} />
      </div>
    </div>
  </footer>
);

export default Footer;
