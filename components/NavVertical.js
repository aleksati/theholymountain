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
      <div className="fixed w-48 mt-2 md:mt-6">
        <div className="flex flex-col space-y-6">
          <Link href="/">
            <div className="hover:cursor-pointer">
              {currTheme === "dark" ? (
                <MyImage
                  src={"logo-white.png"}
                  width="600"
                  height="279"
                  layout="responsive"
                  alt="band logo"
                  priority={true}
                />
              ) : (
                <MyImage
                  src={"logo-black.png"}
                  width="600"
                  height="279"
                  layout="responsive"
                  alt="band logo"
                  priority={true}
                />
              )}
            </div>
          </Link>
          <NavVerticalTabs />
          <ButtonTheme />
        </div>
      </div>
    </div>
  );
};

export default NavVertical;
