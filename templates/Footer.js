import ButtonIconAndText from "../components/ButtonIconAndText";
import SoMeBar from "../components/SoMeBar";

const Footer = () => {
  return (
    <footer className="py-4 border-t border-secondary-skin-light dark:border-secondary-skin-dark text-primary-light dark:text-primary-dark bg-primary-light dark:bg-primary-dark">
      <div className="container flex items-center justify-center px-4 mx-auto space-y-2 text-center md:space-y-0 md:px-4 md:justify-between md:flex-row text-size-regular">
        <div className="order-3 hidden space-x-2 md:flex w-50">
          <ButtonIconAndText
            text="Report issues"
            iconId="issue"
            onClick={() =>
              window.open("https://github.com/aleksati/theholymountain/issues")
            }
          />
        </div>
        <div className="flex flex-col order-1 md:items-start text-size-small text-secondary">
          <p> The Holy Mountain &copy; {new Date().getFullYear()}</p>
          <p>
            Page by&nbsp;
            <a className="hover:underline" href="https://github.com/aleksati">
              Aleksander Tidemann
            </a>
          </p>
        </div>
        <div className="hidden lg:flex md:order-2">
          <SoMeBar iconSize="text-4xl" exclude={["nothing"]} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
