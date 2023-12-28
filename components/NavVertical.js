import { useClickOutside } from "../hooks/useClickOutside";
import logoWhite from "../public/img/logo-white.png";
import logoBlack from "../public/img/logo-black.png";
import getCurrTheme from "../functions/getCurrTheme";
import NavVerticalTabs from "./NavVerticalTabs";
import ButtonTheme from "./ButtonTheme";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Contact from "./Contact";

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
      <div className="fixed">
        <div className="flex flex-col p-4 space-y-4">
          <div className="w-52">
            <Link href="/">
              <Image
                src={currTheme === "dark" ? logoWhite : logoBlack}
                alt="band logo"
                placeholder="blur"
                className="hover:cursor-pointer"
              />
            </Link>
          </div>
          <div className="pl-4">
            <NavVerticalTabs />
          </div>
          <div className="flex pl-2">
            <ButtonTheme />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavVertical;
