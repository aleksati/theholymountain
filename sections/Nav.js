import { useState, useRef } from "react";
import logoWhite from "../public/img/logo-white.png";
import logoBlack from "../public/img/logo-black.png";
import getCurrTheme from "../utils/getCurrTheme";
import ToggleTheme from "../components/ToggleTheme";
import CardPopup from "../components/CardPopup";
import CardAbout from "../components/CardAbout";
import Button from "../components/Button";

import Icon from "../components/Icon";

const Nav = () => {
  const [isAbout, setIsAbout] = useState(false);
  const { currTheme } = getCurrTheme();
  const popupRef = useRef(null);

  const handleClick = () => setIsAbout(prevstate => !prevstate);

  return (
    <>
      {isAbout ? (
        <CardPopup
          handleClickOutside={handleClick}
          closeButton={false}
          ref={popupRef}
          className="p-6"
        >
          <CardAbout imgSrc={currTheme === "dark" ? logoWhite : logoBlack} />
        </CardPopup>
      ) : null}
      <div className="fixed flex space-x-2 right-4 bottom-4">
        {!isAbout ? (
          <Button
            onClick={handleClick}
            showTooltip={true}
            tooltipMessage="About"
          >
            <Icon id="about" />
          </Button>
        ) : null}

        <ToggleTheme />
      </div>
    </>
  );
};

export default Nav;
