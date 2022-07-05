import logoWhite from "../public/img/logo-white.png";
import logoBlack from "../public/img/logo-black.png";
import getCurrTheme from "../utils/getCurrTheme";
import { useState, useRef } from "react";
import ToggleTheme from "../components/ToggleTheme";
import CardPopup from "../components/CardPopup";
import CardAboutContent from "../components/CardAboutContent";
import { RiQuestionMark } from "react-icons/ri";
import Button from "../components/Button";

const Nav = () => {
  const [isAbout, setIsAbout] = useState(false);
  const { currTheme } = getCurrTheme();
  const popupRef = useRef(null);

  const handleClick = () => setIsAbout(prevstate => !prevstate);

  return (
    <>
      <CardPopup
        handleClickOutside={handleClick}
        condition={isAbout}
        closeButton={false}
        ref={popupRef}
        className="p-4"
      >
        <CardAboutContent
          imgSrc={currTheme === "dark" ? logoWhite : logoBlack}
        />
      </CardPopup>
      <div className="fixed flex space-x-2 right-4 bottom-4">
        {!isAbout ? (
          <Button
            onClick={handleClick}
            showTooltip={true}
            tooltipMessage="About"
          >
            <RiQuestionMark className={"text-md"} />
          </Button>
        ) : null}

        <ToggleTheme iconSize={"text-md"} />
      </div>
    </>
  );
};

export default Nav;
