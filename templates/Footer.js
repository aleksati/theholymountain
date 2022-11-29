import ButtonIconAndText from "../components/ButtonIconAndText";
import SoMeBar from "../components/SoMeBar";

const Footer = () => {
  return (
    <footer className="py-4 border-t border-secondary-skin-light dark:border-secondary-skin-dark text-primary-light dark:text-primary-dark bg-primary-light dark:bg-primary-dark">
      <div className="container grid grid-cols-3 items-center mx-auto text-sm">
        <div className="hidden md:flex pl-4">
          <ButtonIconAndText
            text="Report issues"
            iconId="issue"
            onClick={() =>
              window.open("https://github.com/aleksati/theholymountain/issues")
            }
          />
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col space-y-1 items-center text-secondary">
          <p> The Holy Mountain &copy; {new Date().getFullYear()}</p>
          <p>
            Page by&nbsp;
            <a className="hover:underline" href="https://github.com/aleksati">
              Aleksander Tidemann
            </a>
          </p>
          <SoMeBar
            iconSize="text-2xl"
            className={"!space-x-2 p-1"}
            exclude={["nothing"]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
