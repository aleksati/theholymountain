import logoWhite from "../public/img/logo-white.png";
import logoBlack from "../public/img/logo-black.png";
import getCurrTheme from "../utils/getCurrTheme";
// import SoMeBar from "./SoMeBar";
import Image from "next/image";
import React from "react";

const CardAbout = () => {
  const { currTheme } = getCurrTheme();
  const imgSrc = currTheme === "dark" ? logoWhite : logoBlack;

  return (
    <div className="flex flex-col">
      <Image src={imgSrc} alt="logo" placeholder="blur" />
      <p className="mb-4 text-primary-light dark:text-primary-dark text-size-regular">
        An avant-garde pop group from Norway with accordion, synthesizer, drums,
        and vocals. Our members are Andreas Angell, Aleksander Tidemann and
        Catharina Janner Røed.
      </p>
      {/* <SoMeBar
        iconSize="text-3xl"
        exclude={["nothing"]}
        className="justify-around p-4"
      /> */}
    </div>
  );
};

export default CardAbout;
