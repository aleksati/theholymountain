import React, { useEffect } from "react";
import SoMeBar from "../SoMeBar";
import logoWhite from "../../public/img/logo-white.png";
import logoBlack from "../../public/img/logo-black.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const AboutCard = React.forwardRef(({ handleClickOutside, navRef }, ref) => {
  const { theme, systemTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;

  // handle click outside of the card
  useEffect(() => {
    const onClickOutside = event => {
      if (navRef.current && navRef.current.contains(event.target)) return;
      if (ref.current && !ref.current.contains(event.target)) {
        handleClickOutside();
      }
    };

    document.addEventListener("click", onClickOutside, true);
    return () => {
      document.removeEventListener("click", onClickOutside, true);
    };
  }, [navRef, ref]);

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-brightness-50">
      <div
        ref={ref}
        className="max-w-sm p-6 rounded-md shadow-md bg-primary-light dark:bg-primary-dark"
      >
        <Image
          src={currTheme === "dark" ? logoWhite : logoBlack}
          alt="logo"
          placeholder="blur"
        />
        <p className="text-secondary-light dark:text-secondary-dark text-size-regular">
          An avant-garde pop group from Norway with Accordion, Synthesizer,
          Drums, and Vocals. Check out our new album..
        </p>
        <SoMeBar iconSize="text-xl" excludes={["nothing"]} className="p-4" />
      </div>
    </div>
  );
});

export default AboutCard;
