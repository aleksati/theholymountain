import { useState, useRef } from "react";
import ModalContact from "./ModalContact";
import ModalTrigger from "./ModalTrigger";
import Modal from "./Modal";

const contactModalProps = {
  iconId: "contact",
  // text: "contact",
  // keepTextOnSmallScreen: true,
  hasTooltip: true,
  tooltipText: "contact",
  label: "Contact Us",
  modalMaxSize: "max-w-md",
  tabOrder: "5",
};

const Contact = () => {
  const [contactIsShown, setContactIsShown] = useState(false);
  const contactTriggerRef = useRef();

  return (
    <>
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
    </>
  );
};

export default Contact;
