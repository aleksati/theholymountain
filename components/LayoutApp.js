import { useRef, useState, useEffect } from "react";
import Footer from "../sections/Footer";
import Nav from "../sections/Nav";
import Meta from "./Meta";

const LayoutApp = ({ children, appMeta }) => {
  const mainRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [navPosition, setNavPosition] = useState(true);

  const listenToScroll = () => {
    const mainHeight = mainRef.current.offsetHeight;
    const pageBottom = window.pageYOffset + window.innerHeight;
    if (pageBottom < mainHeight) return setNavPosition("fixed");
    setNavPosition("hidden");
  };

  useEffect(() => {
    if (isMounted) {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
    }
  }, [isMounted]);

  useEffect(() => {
    if (mainRef.current) setIsMounted(true);
  }, [mainRef]);

  return (
    <>
      <Meta {...appMeta} />
      <main className="flex-grow" ref={mainRef}>
        {children}
        <Nav className={`flex space-x-2 right-4 bottom-4 ${navPosition}`} />
      </main>
      <Footer />
    </>
  );
};

export default LayoutApp;
