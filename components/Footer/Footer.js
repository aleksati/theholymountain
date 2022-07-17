import SoMeBar from "../SoMeBar";
import ReportIssues from "./ReportIssues";

const Footer = () => (
  <footer className="z-0 py-4 border-gray-300 border-t-1 dark:border-gray-600 bg-primary-light dark:bg-primary-dark brightness-95">
    <div className="flex items-center justify-around ml-4 mr-4 text-center text-size-small sm:text-size-regular text-primary-light dark:text-primary-dark">
      <div className="space-y-2">
        <p> The Holy Mountain &copy; {new Date().getFullYear()}</p>
        <SoMeBar
          iconSize="text-md sm:text-2xl"
          exclude={["youtube"]}
          className="justify-center space-x-4 text-secondary"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-1">
        <ReportIssues />
        <p className="hidden sm:flex text-secondary text-size-small">
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
