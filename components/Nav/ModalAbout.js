import logoWhite from "../../public/img/logo-white.png";
import logoBlack from "../../public/img/logo-black.png";
import getCurrTheme from "../../utils/getCurrTheme";
import SoMeBar from "../SoMeBar";
import Image from "next/image";
import React from "react";

const ModalAbout = ({ label }) => {
  const { currTheme } = getCurrTheme();

  return (
    <div className="flex flex-col p-4 space-y-2" aria-label={`${label} dialog`}>
      {currTheme === "dark" ? (
        <Image src={logoWhite} alt="band logo" placeholder="blur" />
      ) : (
        <Image src={logoBlack} alt="band logo" placeholder="blur" />
      )}

      <div>
        <p className="mb-2 text-primary-light dark:text-primary-dark text-size-regular">
          An avant-garde pop group from Oslo, Norway with accordion,
          synthesizer, drums, and vocals.
        </p>
      </div>
      <div className="text-size-small sm:text-size-regular text-secondary">
        <p>Andreas Angell - Accordion</p>
        <p>Catharina Janner Røed - Vocals </p>
        <p>Aleksander Tidemann - Drums / Synthesizer</p>
      </div>
      <div>
        <SoMeBar
          iconSize="text-2xl sm:text-4xl"
          exclude={["nothing"]}
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default ModalAbout;
