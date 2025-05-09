import { forwardRef, useEffect, useState } from "react";
import ButtonIcon from "../components/ButtonIcon";
// import NavTop from "../components/NavTop";
import MyImage from "../components/MyImage";
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
          iconSize="text-3xl md:text-4xl"
        />
      </div>
      {showNav ? (
        <Nav
          showNavTop={true}
          onToggleNavVertical={handleToggleNav}
        />
      ) : null}
      <div
        className={`container pb-4 ${
          showNav && "blur-sm"
        } mx-auto flex-1 overflow-hidden pt-6 ${className}`}
        id={pageId}
        ref={ref}>
        <div className="flex justify-center pb-6">
          <Link href="/">
            <div className="px-6 w-80 hover:cursor-pointer">
              <MyImage
                src={"logo-white.png"}
                width="600"
                height="466"
                layout="responsive"
                alt="band logo"
                priority={true}
              />
            </div>
          </Link>
        </div>
        {children}
      </div>
    </>
  );
});

export default LayoutPageMobile;
