import ButtonIconAndText from "../components/ButtonIconAndText";
import ControlsPageMedia from "../components/ControlsPageMedia";
import ModalContact from "../components/ModalContact";
import ButtonTheme from "../components/ButtonTheme";
import ButtonTo from "../components/ButtonTo";
import ModalAbout from "../components/ModalAbout";
import Modal from "../components/Modal";
import { useState, useRef, useEffect } from "react";
import NavMenu from "../components/NavMenu";

const aboutModal = <ModalAbout />;
const aboutModalProps = {
  iconId: "about",
  hasTooltip: true,
  tooltipText: "about",
  label: "About Us",
  modalMaxSize: "max-w-md", //   modalMaxSize: "max-w-sm sm:max-w-xl",
  tabOrder: "6",
};

const contactModal = <ModalContact />;
const contactModalProps = {
  iconId: "contact",
  hasTooltip: true,
  tooltipText: "contact",
  label: "Contact Us",
  modalMaxSize: "max-w-md",
  tabOrder: "5",
};

// on mobile, The menubar should go downwards?

const Nav = ({
  onTabClick,
  activeTab,
  tabs = [""],
  showMediaTabControls = false,
  showBackButton = false,
  showMenu = true,
}) => {
  const [menuIsActive, setMenuIsActive] = useState();

  return (
    <nav className="z-50" aria-label="Navbar" role="toolbar">
      <div className="container grid grid-cols-3 p-4 pb-0 mx-auto">
        <div>
          {showBackButton ? (
            <ButtonTo path="/" icon="prevArrow" text="home" />
          ) : null}
        </div>
        <div className="flex items-center justify-center w-100">
          {showMediaTabControls ? (
            <ControlsPageMedia
              tabs={tabs}
              onTabClick={onTabClick}
              activeTab={activeTab}
              menuIsActive={menuIsActive}
            />
          ) : null}
        </div>
        {showMenu ? <NavMenu isActive={(val) => setMenuIsActive(val)} /> : null}
      </div>
    </nav>
  );
};

export default Nav;
