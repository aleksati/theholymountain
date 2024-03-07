import { useClickOutside } from "../hooks/useClickOutside";
import getCurrTheme from "../functions/getCurrTheme";
import NavVerticalTabs from "./NavVerticalTabs";
import ButtonTheme from "./ButtonTheme";
import { useEffect } from "react";
import Link from "next/link";
// import Contact from "./Contact";
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
      ref={ref}
    >
      <div className="fixed w-52 mt-2 md:mt-4">
        <div className="flex flex-col space-y-6">
          <Link href="/">
            <div className="px-6 hover:cursor-pointer">
              <MyImage
                src={currTheme === "dark" ? "logo-white.png" : "logo-black.png"}
                width="600"
                height="466"
                layout="responsive"
                alt="band logo"
                priority={true}
              />
            </div>
          </Link>
          <div className="pl-6">
            <NavVerticalTabs />
          </div>
          <div className="pl-6">
            <ButtonTheme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavVertical;
