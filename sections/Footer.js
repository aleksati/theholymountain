import SoMeBar from "../components/SoMeBar";
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer className="py-2 text-center border-t-2 border-gray-300 dark:border-gray-600 bg-primary-light dark:bg-primary-dark">
      <div className="flex place-content-between text-size-small text-primary-light dark:text-primary-dark">
        <div className="pt-2 ml-4 space-y-1">
          <Button>
            <a href="https://github.com/aleksati">Report issues</a>
          </Button>
        </div>
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
        <div className="invisible pt-2 ml-4 space-y-1">
          <Button>
            <a href="https://github.com/aleksati">Report issues</a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
