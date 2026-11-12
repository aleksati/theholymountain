import { useClickOutside } from "../hooks/useClickOutside";
import getCurrTheme from "../functions/getCurrTheme";
import NavTabs from "./NavTabs";
// import ButtonTheme from "./ButtonTheme";
import { useEffect } from "react";
import Link from "next/link";
// import Contact from "./Contact";
import Logo from "./Logo";
import SoMeBar from "./SoMeBar";

const Nav = ({ showNavTop, onToggleNavVertical }) => {
  const [ref, isClickOutside] = useClickOutside();
  const { currTheme } = getCurrTheme();

  useEffect(() => {
    if (isClickOutside && showNavTop) onToggleNavVertical();
  }, [isClickOutside, onToggleNavVertical, showNavTop]);

  return (
    <div
      className={`z-40 min-h-screen bg-primary-light dark:bg-primary-dark dark:border-secondary-dark space-y-12 ${
        showNavTop ? "fixed" : "flex-none"
      } w-full p-4`}
      ref={ref}>
      {/* <div className="fixed w-52 mt-2 md:mt-4"> */}
      <div className="flex flex-col space-y-6 items-center justify-center">
        <Link href="/">
          <div className="px-6 w-80 hover:cursor-pointer pt-2">
            <Logo variant={"white"} />
          </div>
        </Link>
        <div className="pl-2">
          <NavTabs />
        </div>
      </div>
    </div>
  );
};

export default Nav;
