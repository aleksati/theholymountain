import { ThemeProvider } from "next-themes";
import LayoutApp from "../layouts/LayoutApp";
import { CartProvider } from "../context/CartContext";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <CartProvider>
        <LayoutApp>
          <Component {...pageProps} />
        </LayoutApp>
      </CartProvider>
    </ThemeProvider>
  );
};

export default MyApp;
