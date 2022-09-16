import SoMeBar from "../components/SoMeBar";
import { useRouter } from "next/router";
import ButtonTheme from "../components/ButtonTheme";
import ButtonIconAndText from "../components/ButtonIconAndText";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="py-4 border-t border-secondary-skin-light dark:border-secondary-skin-dark text-primary-light dark:text-primary-dark bg-primary-light dark:bg-primary-dark">
      <div className="container flex flex-col items-center justify-center mx-auto space-y-4 text-center md:space-y-0 md:px-4 md:justify-between md:flex-row text-size-regular">
        <div className="md:order-2">
          <SoMeBar
            iconSize="text-4xl"
            exclude={["nothing"]}
            className="justify-center"
          />
        </div>
        <div className="flex space-x-2 w-50 md:order-3">
          <ButtonTheme />
          <ButtonIconAndText
            text="Report issues"
            iconId="issue"
            onClick={() =>
              router.push("https://github.com/aleksati/theholymountain/issues")
            }
          />
        </div>
        <div className="flex flex-col items-center text-size-small md:items-start md:order-1 text-secondary">
          <p> The Holy Mountain &copy; {new Date().getFullYear()}</p>
          <p>
            Page by&nbsp;
            <a className="hover:underline" href="https://github.com/aleksati">
              Aleksander Tidemann
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
