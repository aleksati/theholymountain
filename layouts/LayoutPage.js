import { useEffect } from "react";
import { Router } from "next/router";
import Meta from "../components/Meta";

const LayoutPage = ({ children, id, className, pageMeta, border = true }) => {
  // Because Next.js link doesn't render with page scrolled at the top
  //   useEffect(() => {
  //     Router.events.on("routeChangeComplete", () => {
  //       window.scroll({
  //         top: 0,
  //         left: 0,
  //         behavior: "smooth",
  //       });
  //     });
  //   }, []);

  const borderTop =
    "border-t border-secondary-skin-light dark:border-secondary-skin-dark";
  return (
    <>
      <Meta {...pageMeta} />
      <div
        className={`min-h-screen container mx-auto ${
          border ? borderTop : null
        } ${className}`}
        id={id}
      >
        {children}
      </div>
    </>
  );
};

export default LayoutPage;
