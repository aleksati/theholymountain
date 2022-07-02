import React, { useRef } from "react";
import AboutCard from "../components/Nav/AboutCard";
import { useRouter } from "next/router";

const about = () => {
  const router = useRouter();
  const navRef = useRef(null);
  const cardRef = useRef(null);

  const handleClick = () => {
    router.push("/");
  };

  return (
    <AboutCard handleClickOutside={handleClick} navRef={navRef} ref={cardRef} />
  );
};

export default about;
