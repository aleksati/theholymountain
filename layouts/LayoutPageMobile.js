import { forwardRef, useState } from "react";
import ButtonIcon from "../components/ButtonIcon";
// import NavTop from "../components/NavTop";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Link from "next/link";

const LayoutPageMobile = forwardRef(({ pageId, children, className }, ref) => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () =>
    setShowNav((prevState) => !prevState);

  return (
    <>
      {/* <NavTop
        onToggleNavVertical={handleToggleNavVertical}
        showNavVertical={showNavVertical}
      /> */}
      <div className="z-50 fixed top-4 right-4">
        <ButtonIcon
          iconId={showNav ? "x" : "threedots"}
          onClick={handleToggleNav}
          iconSize="text-2xl md:text-3xl"
        />
      </div>
      {showNav ? (
        <Nav
          showNavTop={true}
          onToggleNavVertical={handleToggleNav}
        />
      ) : null}
      <div
        className={`container pb-8 px-6 sm:px-0 ${
          showNav && "blur-sm"
        } mx-auto flex-1 overflow-hidden pt-0 ${className}`}
        id={pageId}
        ref={ref}>
        <div className="flex justify-center pb-8">
          <Link href="/">
            <div className="px-20 md:px-8 w-80 hover:cursor-pointer">
              <Logo variant="white" />
            </div>
          </Link>
        </div>
        {children}
      </div>
    </>
  );
});

export default LayoutPageMobile;
