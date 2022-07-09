import { useState, useRef } from "react";
import CardContact from "../components/CardContact";
import ToggleTheme from "../components/ToggleTheme";
import CardPopup from "../components/CardPopup";
import CardAbout from "../components/CardAbout";
import Button from "../components/Button";
import Icon from "../components/Icon";

const Nav = () => {
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const popupRef = useRef(null);

  const handleAboutClick = () => setIsAbout(prevstate => !prevstate);
  const handleContactClick = () => setIsContact(prevstate => !prevstate);

  return (
    <>
      {isAbout ? (
        <CardPopup
          handleClickOutside={handleAboutClick}
          ref={popupRef}
          className="p-4"
        >
          <CardAbout />
        </CardPopup>
      ) : null}
      {isContact ? (
        <CardPopup
          handleClickOutside={handleContactClick}
          ref={popupRef}
          className="p-4"
        >
          <CardContact />
        </CardPopup>
      ) : null}
      <div className="fixed flex space-x-2 right-4 bottom-4">
        {!isAbout ? (
          <Button
            onClick={handleAboutClick}
            showTooltip={true}
            tooltipMessage="About"
          >
            <Icon id="about" />
          </Button>
        ) : null}

        {!isContact ? (
          <Button
            onClick={handleContactClick}
            showTooltip={true}
            tooltipMessage="Contact"
          >
            <Icon id="contact" />
          </Button>
        ) : null}
        <ToggleTheme />
      </div>
    </>
  );
};

export default Nav;
