import { useClickOutside } from "../hooks/useClickOutside";
import getCurrTheme from "../functions/getCurrTheme";
import NavVerticalTabs from "./NavVerticalTabs";
import ButtonTheme from "./ButtonTheme";
import { useEffect } from "react";
import Link from "next/link";
import Contact from "./Contact";
import MyImage from "./MyImage";

const NavVertical = ({ showNavTop, onToggleNavVertical }) => {
  const [ref, isClickOutside] = useClickOutside();
  const { currTheme } = getCurrTheme();

  useEffect(() => {
    if (isClickOutside && showNavTop) onToggleNavVertical();
  }, [isClickOutside, onToggleNavVertical, showNavTop]);

  return (
    <div
      className={`z-50 min-h-screen border-r border-secondary bg-primary-light dark:bg-primary-dark dark:border-secondary-dark space-y-12 ${
        showNavTop ? "fixed" : "flex-none"
      } w-64 p-4`}
      ref={ref}>
      <div className="fixed w-52 mt-4">
        <div className="flex flex-col p-4 space-y-6">
          <Link href="/">
            <div className="hover:cursor-pointer">
              <MyImage
                src={currTheme === "dark" ? "logo-white.png" : "logo-black.png"}
                width="1000"
                height="465"
                layout="responsive"
                alt="band logo"
              />
            </div>
          </Link>
          <div className="pl-2">
            <NavVerticalTabs />
          </div>
          <div className="flex">
            <ButtonTheme />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavVertical;
