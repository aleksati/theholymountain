import GoogleAnalytics from "../components/GoogleAnalytics";
import { ThemeProvider } from "next-themes";
import LayoutApp from "../layouts/LayoutApp";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <GoogleAnalytics />
      <LayoutApp>
        <Component {...pageProps} />
      </LayoutApp>
    </ThemeProvider>
  );
};

export default MyApp;
