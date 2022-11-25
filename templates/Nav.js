import ButtonIconAndText from "../components/ButtonIconAndText";
import ControlsPageMedia from "../components/ControlsPageMedia";
import ModalContact from "../components/ModalContact";
import ButtonTheme from "../components/ButtonTheme";
import ButtonTo from "../components/ButtonTo";
import ModalAbout from "../components/ModalAbout";
import Modal from "../components/Modal";
import { useState, useRef, useEffect } from "react";

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
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setMenuIsVisible((prevState) => !prevState);

  // close the menu if user clicks outside of it.
  // I cannot use contains() method for html elemtents becuase of the icons.
  const menuClickHandler = (e) => {
    // avoid keyDown closing the menu
    if (menuRef.current && e.pageX !== 0 && e.pageY !== 0) {
      const { bottom, top, left, right } =
        menuRef.current.getBoundingClientRect();
      const mouseX = e.x;
      const mouseY = e.y;

      if (mouseX > left && mouseX < right && mouseY < bottom && mouseY > top)
        return;
      return setMenuIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", menuClickHandler);
    return () => window.removeEventListener("click", menuClickHandler);
  }, []);

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
              menuIsVisible={menuIsVisible}
            />
          ) : null}
        </div>
        <div
          className="flex flex-grow space-x-2 place-content-end"
          ref={menuRef}
        >
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
              <ButtonTheme tabOrder="4" />
            </>
          ) : null}
          {showMenu ? (
            <ButtonIconAndText
              tabOrder="3"
              label="show and close nav button"
              pressed={menuIsVisible}
              iconId={menuIsVisible ? "x" : "threedots"}
              onClick={toggleMenu}
            />
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
