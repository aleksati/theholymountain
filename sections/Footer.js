import SoMeBar from "../components/SoMeBar";
import ReportIssues from "../components/ReportIssues";
import ThemeToggle from "../components/Nav/ThemeToggle";

const Footer = () => (
  <footer className="py-4 border-t border-secondary-skin-light dark:border-secondary-skin-dark text-primary-light dark:text-primary-dark bg-primary-light dark:bg-primary-dark">
    <div className="container flex flex-col items-center justify-center mx-auto space-y-4 text-center md:space-y-0 md:px-4 md:justify-between md:flex-row text-size-regular">
      <div className="md:order-2">
        <SoMeBar
          iconSize="text-4xl"
          exclude={["youtube"]}
          className="justify-center"
        />
      </div>
      <div className="flex space-x-2 w-50 md:order-3">
        <ThemeToggle />
        <ReportIssues />
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

export default Footer;
