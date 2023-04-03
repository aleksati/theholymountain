import { useState, useRef, useEffect, useCallback } from "react";
import ButtonIconAndText from "./ButtonIconAndText";
import ModalContact from "./ModalContact";
import ModalTrigger from "./ModalTrigger";
import ButtonTheme from "./ButtonTheme";
import ModalAbout from "./ModalAbout";
import Modal from "./Modal";

const NavMenuMobile = ({ aboutModalProps, contactModalProps }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [aboutIsShown, setAboutIsShown] = useState(false);
  const [contactIsShown, setContactIsShown] = useState(false);
  const aboutTriggerRef = useRef();
  const contactTriggerRef = useRef();
  const menuRef = useRef();

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
    <div
      className="flex flex-grow space-x-4 items-center place-content-end"
      ref={menuRef}>
      {menuIsActive ? (
        <>
          {aboutIsShown ? (
            <Modal
              key="About"
              modalMaxSize={aboutModalProps.modalMaxSize}
              modalIsShown={aboutIsShown}
              modalTriggerRef={aboutTriggerRef}
              setModalIsShown={setAboutIsShown}>
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
              setModalIsShown={setContactIsShown}>
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
        onClick={() => setMenuIsActive((prevState) => !prevState)}
        iconId={menuIsActive ? "x" : "threedots"}
        label="show and close nav button"
        pressed={menuIsActive}
        tabOrder="3"
        iconSize="text-xl"
      />
    </div>
  );
};

export default NavMenuMobile;
