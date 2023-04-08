import { useState, useRef } from "react";
import ModalContact from "./ModalContact";
import ModalTrigger from "./ModalTrigger";
import ButtonTheme from "./ButtonTheme";
import ModalAbout from "./ModalAbout";
import Modal from "./Modal";

const NavMenu = ({ aboutModalProps, contactModalProps }) => {
  const [aboutIsShown, setAboutIsShown] = useState(false);
  const [contactIsShown, setContactIsShown] = useState(false);
  const aboutTriggerRef = useRef();
  const contactTriggerRef = useRef();
  const menuRef = useRef();

  return (
    <div
      className="flex flex-grow space-x-4 px-2 items-center place-content-end"
      ref={menuRef}
    >
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
    </div>
  );
};

export default NavMenu;
