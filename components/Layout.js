import { Nav } from "./Nav";
import { Header } from "./Header";
import styles from "../styles/Layout.module.css";
import Meta from "./Meta";

// If I want to have something that shows on every page, then put it here.

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
