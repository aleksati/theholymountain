import ButtonScrollTo from "../components/ButtonScrollTo";
import { forwardRef, useEffect, useState } from "react";
import NavVertical from "../components/NavVertical";
import NavTop from "../components/NavTop";
// import { useRouter } from "next/router";

const LayoutPageMobile = forwardRef(({ pageId, children, className }, ref) => {
  const [showNavVertical, setShowNavVertical] = useState(false);

  const handleToggleNavVertical = () =>
    setShowNavVertical((prevState) => !prevState);

  return (
    <>
      <NavTop
        onToggleNavVertical={handleToggleNavVertical}
        showNavVertical={showNavVertical}
      />
      {showNavVertical ? (
        <NavVertical
          showNavTop={true}
          onToggleNavVertical={handleToggleNavVertical}
        />
      ) : null}
      <div
        className={`container pb-4 ${
          showNavVertical && "blur-sm"
        } mx-auto flex-1 overflow-hidden px-4 pt-20 ${className}`}
        id={pageId}
        ref={ref}>
        {children}
      </div>
      <div className="fixed right-4 bottom-4">
        <ButtonScrollTo targetId={pageId} parentRef={ref} />
      </div>
    </>
  );
});

export default LayoutPageMobile;
