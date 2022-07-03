import LayoutApp from "../components/LayoutApp";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

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
