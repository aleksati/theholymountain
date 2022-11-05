import ButtonIconAndText from "../components/ButtonIconAndText";
import ModalContact from "../components/ModalContact";
import ModalAbout from "../components/ModalAbout";
import Modal from "../components/Modal";

const aboutModal = <ModalAbout />;
const aboutModalProps = {
  iconId: "about",
  hasTooltip: true,
  tooltipText: "About",
  label: "About Us",
  modalMaxSize: "max-w-md", //   modalMaxSize: "max-w-sm sm:max-w-xl",
  tabOrder: "1",
  //   text: "About",
};

const contactModal = <ModalContact />;
const contactModalProps = {
  iconId: "contact",
  hasTooltip: true,
  tooltipText: "Contact",
  label: "Contact Us",
  modalMaxSize: "max-w-md",
  tabOrder: "2",
  //   text: "Contact",
};

const Nav = () => {
  return (
    <nav
      className="fixed z-10 flex space-x-2 scrollLock-compensation right-4 top-4"
      role="toolbar"
      aria-label="Navigation toolbar"
    >
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
    </nav>
  );
};

export default Nav;
