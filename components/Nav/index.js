import ThemeToggle from "./ThemeToggle";
import AboutToggle from "./AboutToggle"; // toggle
import AboutCard from "./AboutCard";
import { useState, useRef } from "react";

const Nav = () => {
  const [isAbout, setIsAbout] = useState(false);
  const navRef = useRef(null);
  const cardRef = useRef(null);

  const handleClick = () => setIsAbout(prevstate => !prevstate);

  return (
    <>
      {isAbout ? (
        <AboutCard
          handleClickOutside={handleClick}
          navRef={navRef}
          ref={cardRef}
        />
      ) : null}
      <div className="fixed flex space-x-2 right-4 bottom-4">
        <AboutToggle handleClick={handleClick} isAbout={isAbout} ref={navRef} />
        <ThemeToggle />
      </div>
    </>
  );
};

export default Nav;
