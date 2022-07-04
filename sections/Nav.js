import logoWhite from "../public/img/logo-white.png";
import logoBlack from "../public/img/logo-black.png";
import getCurrTheme from "../utils/getCurrTheme";
import { useState, useRef } from "react";
import ToggleTheme from "../components/ToggleTheme";
import ToggleAbout from "../components/ToggleAbout";
import CardPopup from "../components/CardPopup";
import SoMeBar from "../components/SoMeBar";
import Image from "next/image";

const Nav = () => {
  const [isAbout, setIsAbout] = useState(false);
  const { currTheme } = getCurrTheme();
  const popupRef = useRef(null);

  return (
    <>
      <CardPopup
        handleClickOutside={() => setIsAbout(prevstate => !prevstate)}
        condition={isAbout}
        closeButton={false}
        ref={popupRef}
      >
        <Image
          src={currTheme === "dark" ? logoWhite : logoBlack}
          alt="logo"
          placeholder="blur"
        />
        <p className="mb-4 text-primary-light dark:text-primary-dark text-size-regular">
          An avant-garde pop group from Norway with Accordion, Synthesizer,
          Drums, and Vocals.
        </p>
        <SoMeBar
          iconSize="text-xl"
          exclude={["nothing"]}
          className="justify-around p-4"
        />
      </CardPopup>
      <div className="fixed flex space-x-2 right-4 bottom-4">
        <ToggleAbout
          iconSize={"text-md"}
          handleClick={() => setIsAbout(prevstate => !prevstate)}
          isAbout={isAbout}
        />
        <ToggleTheme iconSize={"text-md"} />
      </div>
    </>
  );
};

export default Nav;
