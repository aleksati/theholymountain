import { useState, useRef, useEffect, useCallback } from "react";
import ButtonIconAndText from "./ButtonIconAndText";
import ModalContact from "./ModalContact";
import ModalTrigger from "./ModalTrigger";
import ButtonTheme from "./ButtonTheme";
import ModalAbout from "./ModalAbout";
import Modal from "./Modal";

const aboutModalProps = {
  iconId: "about",
  hasTooltip: true,
  tooltipText: "about",
  label: "About Us",
  modalMaxSize: "max-w-md", //   modalMaxSize: "max-w-sm sm:max-w-xl",
  tabOrder: "6",
};

const contactModalProps = {
  iconId: "contact",
  hasTooltip: true,
  tooltipText: "contact",
  label: "Contact Us",
  modalMaxSize: "max-w-md",
  tabOrder: "5",
};

const NavMenu = ({ isActive }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [aboutIsShown, setAboutIsShown] = useState(false);
  const [contactIsShown, setContactIsShown] = useState(false);
  const aboutTriggerRef = useRef();
  const contactTriggerRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    isActive(menuIsActive);
  }, [menuIsActive]);

  // close the NavMenu if user clicks outside of Nav.
  const menuClickHandler = useCallback(
    (e) => {
      if (aboutIsShown || contactIsShown) return;

      // avoid keyDown closing the menu
      if (menuRef.current && e.pageX !== 0 && e.pageY !== 0) {
        const { bottom, top, left, right } =
          menuRef.current.getBoundingClientRect();
        const mouseX = e.x;
        const mouseY = e.y;

        if (mouseX > left && mouseX < right && mouseY < bottom && mouseY > top)
          return;
        return setMenuIsActive(false);
      }
    },
    [aboutIsShown, contactIsShown]
  );

  useEffect(() => {
    window.addEventListener("click", menuClickHandler);
    return () => window.removeEventListener("click", menuClickHandler);
  }, [menuClickHandler]);

  return (
    <div className="flex flex-grow space-x-2 place-content-end" ref={menuRef}>
      {menuIsActive ? (
        <>
          {aboutIsShown ? (
            <Modal
              key="About"
              modalMaxSize={aboutModalProps.modalMaxSize}
              modalIsShown={aboutIsShown}
              modalTriggerRef={aboutTriggerRef}
              setModalIsShown={setAboutIsShown}
            >
              <ModalAbout />
            </Modal>
          ) : null}
          <ModalTrigger
            ref={aboutTriggerRef}
            modalProps={aboutModalProps}
            onModalTrigger={() => setAboutIsShown(true)}
          />
          {contactIsShown ? (
            <Modal
              key="Contact"
              modalMaxSize={contactModalProps.modalMaxSize}
              modalIsShown={contactIsShown}
              modalTriggerRef={contactTriggerRef}
              setModalIsShown={setContactIsShown}
            >
              <ModalContact />
            </Modal>
          ) : null}
          <ModalTrigger
            ref={contactTriggerRef}
            modalProps={contactModalProps}
            onModalTrigger={() => setContactIsShown(true)}
          />
          <ButtonTheme tabOrder="4" />
        </>
      ) : null}
      <ButtonIconAndText
        tabOrder="3"
        label="show and close nav button"
        pressed={menuIsActive}
        iconId={menuIsActive ? "x" : "threedots"}
        onClick={() => setMenuIsActive((prevState) => !prevState)}
      />
    </div>
  );
};

export default NavMenu;
