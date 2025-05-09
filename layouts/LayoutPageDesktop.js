import NavVertical from "../components/Nav";
import { forwardRef } from "react";

const LayoutPageDesktop = forwardRef(({ pageId, children, className }, ref) => (
  <>
    <NavVertical showNavTop={false} />
    <div
      className={`container pb-4 mx-auto flex-1 overflow-hidden pt-6 ${className}`}
      id={pageId}
      ref={ref}
    >
      {children}
    </div>
  </>
));

export default LayoutPageDesktop;
