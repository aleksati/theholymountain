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
      <header className="fixed left-3 right-3 top-3 z-50 flex h-16 items-center rounded-3xl border border-secondary-skin-dark bg-secondary-dark/50 px-4 text-primary-dark shadow-md backdrop-blur-sm md:left-6 md:right-6 md:h-20 md:px-6">
        <ButtonIcon
          iconId={showNav ? "x" : "threedots"}
          onClick={handleToggleNav}
          iconSize="text-2xl md:text-3xl"
          aria-label={showNav ? "Close navigation" : "Open navigation"}
          aria-expanded={showNav}
          aria-controls="primary-navigation"
        />
        <Link href="/">
          <a className="absolute left-1/2 top-1/2 w-36 -translate-x-1/2 -translate-y-1/2 md:w-44">
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
        ref={ref}>
        {children}
      </div>
    </>
  );
});

export default LayoutPageMobile;
