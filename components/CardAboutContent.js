import React from "react";
import Image from "next/image";
import SoMeBar from "../components/SoMeBar";

const CardAboutContent = ({ imgSrc }) => (
  <>
    <Image src={imgSrc} alt="logo" placeholder="blur" />
    <p className="mb-4 text-primary-light dark:text-primary-dark text-size-regular">
      An avant-garde pop group from Norway with Accordion, Synthesizer, Drums,
      and Vocals.
    </p>
    <SoMeBar
      iconSize="text-xl"
      exclude={["nothing"]}
      className="justify-around p-4"
    />
  </>
);
export default CardAboutContent;
