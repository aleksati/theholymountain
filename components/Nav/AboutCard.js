import React, { useEffect } from "react";
import SoMeBar from "../SoMeBar";
import logoWhite from "../../public/img/logo-white.png";
import logoBlack from "../../public/img/logo-black.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const AboutCard = React.forwardRef(({ handleClickOutside, navRef }, ref) => {
  const { theme } = useTheme();

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
    <div className="fixed inset-0 flex items-center justify-center w-full h-screen backdrop-blur-md">
      <div
        ref={ref}
        className="max-w-sm p-6 rounded-md shadow-md bg-ternary-light dark:bg-ternary-dark"
      >
        {/* <h1 className="mb-2 text-primary-light dark:text-primary-dark text-size-title">
          The Holy Mountain
        </h1> */}
        <Image
          src={theme === "dark" ? logoWhite : logoBlack}
          alt="logo"
          placeholder="blur"
        />
        <div className="space-y-6 divide-y divide-gray-400">
          <p className="text-secondary-light dark:text-secondary-dark text-size-regular">
            An avant-garde pop group from Norway with Accordion, Synthesizer,
            Drums, and Vocals. Check out our new album..
          </p>
          <SoMeBar iconSize="text-2xl" excludes={["nothing"]} className="p-4" />
        </div>
      </div>
    </div>
  );
});

export default AboutCard;
