import SoMeBar from "../SoMeBar";
import ReportIssues from "./ReportIssues";

const Footer = () => (
  <footer className="py-4 border-t border-secondary-skin-light dark:border-secondary-skin-dark text-primary-light dark:text-primary-dark bg-primary-light dark:bg-primary-dark">
    <div className="flex flex-col items-center justify-center space-y-4 text-center sm:space-y-0 sm:px-4 sm:justify-around sm:flex-row text-size-regular">
      <div className="sm:order-2">
        <SoMeBar
          iconSize="text-4xl"
          exclude={["youtube"]}
          className="justify-center"
        />
      </div>
      <div className="sm:order-3">
        <ReportIssues />
      </div>
      <div className="flex flex-col items-center text-size-small sm:items-start sm:order-1 text-secondary">
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
