import ModalContact from "../components/ModalContact";
import ModalAbout from "../components/ModalAbout";
import Modal from "../components/Modal";
import ModalTrigger from "../components/ModalTrigger";

const aboutModal = <ModalAbout />;
const aboutModalProps = {
  triggerIcon: "about",
  triggerHasTooltip: true,
  triggerTooltipMessage: "About",
  triggerLabel: "About Us",
  modalMaxSize: "max-w-xl", //   modalMaxSize: "max-w-sm sm:max-w-xl",
  tabOrder: "1",
};

const contactModal = <ModalContact />;
const contactModalProps = {
  triggerIcon: "contact",
  triggerHasTooltip: true,
  triggerTooltipMessage: "Contact",
  triggerLabel: "Contact Us",
  modalMaxSize: "max-w-md",
  tabOrder: "2",
};

const Nav = () => (
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
        <ModalTrigger
          ref={triggerBtnRef}
          showModal={showModal}
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
        <ModalTrigger
          ref={triggerBtnRef}
          showModal={showModal}
          {...contactModalProps}
        />
      )}
    </Modal>
  </nav>
);

export default Nav;
