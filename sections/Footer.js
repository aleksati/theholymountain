import SoMeBar from "../components/SoMeBar";
import Button from "../components/Button";
import Nav from "./Nav";

const Footer = () => (
  <footer className="py-4 border-gray-300 border-t-1 dark:border-gray-600 bg-primary-light dark:bg-primary-dark brightness-95">
    <div className="flex place-content-evenly lg:text-size-regular text-size-small text-primary-light dark:text-primary-dark">
      <div className="-mt-1 space-y-1 text-center ">
        <p>The Holy Mountain &copy; {new Date().getFullYear()}</p>
        <a className="text-secondary" href="https://github.com/aleksati">
          By Aleksander Tidemann
        </a>
      </div>
      <div className="hidden sm:flex">
        <SoMeBar
          iconSize="text-md sm:text-2xl md:text-3xl"
          exclude={["nothing"]}
          className="justify-center space-x-4"
        />
      </div>
      <div className="flex -mt-2 space-x-2">
        <div>
          <Button>
            <a href="https://github.com/aleksati">Report issues</a>
          </Button>
        </div>
        <Nav className="flex space-x-2" />
      </div>
    </div>
  </footer>
);

export default Footer;
