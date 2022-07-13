import React, { useState, useRef, memo } from "react";
import CardContact from "../components/CardContact";
import ToggleTheme from "../components/ToggleTheme";
import CardPopup from "../components/CardPopup";
import CardAbout from "../components/CardAbout";
import Button from "../components/Button";
import Icon from "../components/Icon";

const Nav = ({ className }) => {
  const popupRef = useRef(null);
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);

  const handleAboutClick = () => setIsAbout(prevstate => !prevstate);
  const handleContactClick = () => setIsContact(prevstate => !prevstate);

  return (
    <nav>
      {isAbout ? (
        <CardPopup
          handleClickOutside={handleAboutClick}
          showCloseButton={true}
          ref={popupRef}
          className="p-4"
        >
          <CardAbout />
        </CardPopup>
      ) : null}
      {isContact ? (
        <CardPopup
          handleClickOutside={handleContactClick}
          showCloseButton={true}
          ref={popupRef}
          className="p-4"
        >
          <CardContact />
        </CardPopup>
      ) : null}
      <div className={className}>
        <Button
          onClick={handleAboutClick}
          showTooltip={true}
          tooltipMessage="About"
        >
          <Icon id="about" />
        </Button>
        <Button
          onClick={handleContactClick}
          showTooltip={true}
          tooltipMessage="Contact"
        >
          <Icon id="contact" />
        </Button>
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default memo(Nav);
