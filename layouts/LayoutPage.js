import { useRef, useState } from "react";
import ButtonIcon from "../components/ButtonIcon";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Link from "next/link";
import ButtonScrollTo from "../components/ButtonScrollTo";
import { useIsMounted } from "../hooks/useIsMounted";
import Meta from "../components/Meta";
import Icon from "../components/Icon";
import Cart from "../components/Cart";

const CONTAINER_SIZE_CLASSES = {
  lg: "",
  xl: "xl:max-w-screen-xl",
};

const LayoutPage = ({ pageId = "top", children, className = "", pageMeta, containerSize = "lg" }) => {
  const [showNav, setShowNav] = useState(false);
  const [isMounted] = useIsMounted();
  const pageTopRef = useRef();

  const handleToggleNav = () => setShowNav((prevState) => !prevState);

  if (!isMounted) return null;

  // the top navbar

  return (
    <>
      <Meta {...pageMeta} />
      <div className="min-h-screen flex relative">
        <header className="fixed mx-3 left-3 right-3 top-4 z-50 flex h-[4rem] items-center rounded-3xl border border-secondary-skin-light/20 bg-[#ffff]/10 px-4 text-primary-dark shadow-md backdrop-blur-2xl md:left-6 md:right-6 md:h-[5rem] md:px-6">
          <div className="relative z-20 flex items-center gap-2">
            {/* Menu Icon */}
            <ButtonIcon
              iconId={showNav ? "x" : "threedots"}
              onClick={handleToggleNav}
              iconSize="text-xl md:text-xl"
              className="hover:cursor-pointer p-1 pl-0.5 z-20"
              aria-label={showNav ? "Close navigation" : "Open navigation"}
              aria-expanded={showNav}
              aria-controls="primary-navigation"
            />
            {/* mail icon */}
            <Link href="/contact">
              <a aria-label="Contact" title="Contact" className="p-1 hover:opacity-70">
                <Icon id="contact" iconSize="text-xl md:text-xl" />
              </a>
            </Link>
          </div>
          <Link href="/">
            <a className="absolute left-1/2 top-1/2 w-36 -translate-x-1/2 -translate-y-1/2 md:w-52 pt-2">
              <Logo variant="white" />
            </a>
          </Link>
          <div className="relative z-20 ml-auto">
            <Cart />
          </div>
        </header>
        <Nav showNavTop={showNav} onToggleNavVertical={handleToggleNav} />
        <div
          className={`container ${CONTAINER_SIZE_CLASSES[containerSize]} pb-8 px-6 sm:px-0 ${
            showNav && "blur-sm"
          } mx-auto flex-1 overflow-hidden pt-28 ${className}`}
          id={pageId}
          ref={pageTopRef}>
          {children}
        </div>
        <div className="absolute right-10">
          <div className="fixed bottom-4">
            <ButtonScrollTo targetId={pageId} pageTopRef={pageTopRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutPage;
