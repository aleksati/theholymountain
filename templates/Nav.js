import ButtonIconAndText from "../components/ButtonIconAndText";
import ControlsPageMedia from "../components/ControlsPageMedia";
import ModalContact from "../components/ModalContact";
import ButtonTheme from "../components/ButtonTheme";
import ButtonTo from "../components/ButtonTo";
import ModalAbout from "../components/ModalAbout";
import Modal from "../components/Modal";
import { useState } from "react";

const aboutModal = <ModalAbout />;
const aboutModalProps = {
  iconId: "about",
  hasTooltip: true,
  tooltipText: "about",
  label: "About Us",
  modalMaxSize: "max-w-md", //   modalMaxSize: "max-w-sm sm:max-w-xl",
  tabOrder: "3",
  //   text: "About",
};

const contactModal = <ModalContact />;
const contactModalProps = {
  iconId: "contact",
  hasTooltip: true,
  tooltipText: "contact",
  label: "Contact Us",
  modalMaxSize: "max-w-md",
  tabOrder: "2",
  //   text: "Contact",
};

// on mobile, The menubar should go downwards

const Nav = ({
  onTabClick,
  activeTab,
  tabs = [""],
  showMediaTabControls = false,
  showBackButton = false,
  showMenu = true,
}) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <nav
      className="z-50 scrollLock-compensation"
      aria-label="Navbar"
      role="toolbar"
    >
      <div className="container grid grid-cols-3 p-4 pb-0 mx-auto">
        <div>
          {showBackButton ? (
            <ButtonTo path="/" icon="prevArrow" text="home" />
          ) : null}
        </div>
        <div className="flex items-center justify-center space-x-4 text-2xl w-100">
          {showMediaTabControls ? (
            <ControlsPageMedia
              tabs={tabs}
              onTabClick={onTabClick}
              activeTab={activeTab}
            />
          ) : null}
        </div>
        <div className="flex space-x-2 place-content-end">
          {menuIsVisible ? (
            <>
              <Modal
                key="About"
                modalContent={aboutModal}
                modalMaxSize={aboutModalProps.modalMaxSize}
              >
                {(triggerBtnRef, showModal) => (
                  <ButtonIconAndText
                    ref={triggerBtnRef}
                    onClick={showModal}
                    {...aboutModalProps}
                  />
                )}
              </Modal>
              <Modal
                key="Contact"
                modalContent={contactModal}
                modalMaxSize={contactModalProps.modalMaxSize}
              >
                {(triggerBtnRef, showModal) => (
                  <ButtonIconAndText
                    ref={triggerBtnRef}
                    onClick={showModal}
                    {...contactModalProps}
                  />
                )}
              </Modal>
              <ButtonTheme />
            </>
          ) : null}
          {showMenu ? (
            <ButtonIconAndText
              tabOrder="1"
              label="show and close nav button"
              pressed={menuIsVisible}
              iconId={menuIsVisible ? "x" : "threedots"}
              onClick={() => setMenuIsVisible(prevState => !prevState)}
            />
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
