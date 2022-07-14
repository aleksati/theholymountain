import { useRef, useState, useEffect } from "react";
import Footer from "../sections/Footer";
import Nav from "../sections/Nav";
import Meta from "./Meta";

const LayoutApp = ({ children, appMeta }) => {
  const mainRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [reportBtnVisibility, setReportBtnVisibility] = useState("hidden");

  const listenToScroll = () => {
    const mainHeight = mainRef.current.offsetHeight;
    const pageBottom = window.pageYOffset + window.innerHeight - 40;
    if (pageBottom < mainHeight) return setReportBtnVisibility("hidden");
    setReportBtnVisibility("");
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
        <Nav
          className={`flex z-10 space-x-2 text-size-small sm:text-size-regular right-4 bottom-4 fixed`}
          reportBtnVisibility={reportBtnVisibility}
        />
      </main>
      <Footer />
    </>
  );
};

export default LayoutApp;
