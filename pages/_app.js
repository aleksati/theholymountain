import LayoutApp from "../components/LayoutApp";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <LayoutApp>
        <Component {...pageProps} />
      </LayoutApp>
    </ThemeProvider>
  );
};

export default MyApp;
