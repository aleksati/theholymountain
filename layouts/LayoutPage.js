import { useRef, useState } from "react";
import ButtonIcon from "../components/ButtonIcon";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Link from "next/link";
import ButtonScrollTo from "../components/ButtonScrollTo";
import { useIsMounted } from "../hooks/useIsMounted";
import Meta from "../components/Meta";
import Icon from "../components/Icon";

const LayoutPage = ({ pageId = "top", children, className = "", pageMeta }) => {
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
        <header className="fixed left-3 right-3 top-3 z-50 flex h-[3.75rem] items-center rounded-3xl border border-secondary-skin-dark bg-secondary-dark/50 px-4 text-primary-dark shadow-md backdrop-blur-sm md:left-6 md:right-6 md:h-[4.75rem] md:px-6">
          <div className="relative z-20 flex items-center gap-2">
            {/* Menu Icon */}
            <ButtonIcon
              iconId={showNav ? "x" : "threedots"}
              onClick={handleToggleNav}
              iconSize="text-2xl md:text-3xl"
              aria-label={showNav ? "Close navigation" : "Open navigation"}
              aria-expanded={showNav}
              aria-controls="primary-navigation"
            />
            {/* mail icon */}
            <Link href="/contact">
              <a aria-label="Contact" title="Contact" className="p-1 hover:opacity-70">
                <Icon id="contact" iconSize="text-2xl md:text-3xl" />
              </a>
            </Link>
          </div>
          <Link href="/">
            <a className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 md:w-52 pt-2">
              <Logo variant="white" />
            </a>
          </Link>
        </header>
        <Nav showNavTop={showNav} onToggleNavVertical={handleToggleNav} />
        <div
          className={`container pb-8 px-6 sm:px-0 ${
            showNav && "blur-sm"
          } mx-auto flex-1 overflow-hidden pt-24 md:pt-28 ${className}`}
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
