import React from "react";
import Image from "next/image";
import SoMeBar from "./SoMeBar";

const CardAbout = ({ imgSrc }) => (
  <div className="flex flex-col">
    <Image src={imgSrc} alt="logo" placeholder="blur" />
    <p className="mb-4 text-primary-light dark:text-primary-dark text-size-regular">
      An avant-garde pop group from Norway with accordion, synthesizer, drums,
      and vocals. Our members are Andreas Angell, Aleksander Tidemann and
      Catharina Janner Røed.
    </p>
    <SoMeBar
      iconSize="text-xl"
      exclude={["nothing"]}
      className="justify-around p-4"
    />
  </div>
);
export default CardAbout;
