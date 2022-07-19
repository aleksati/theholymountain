import React from "react";
import ModalContact from "./ModalContact";
import ModalAbout from "./ModalAbout";
import ThemeToggle from "./ThemeToggle";
import Modal from "../Modal/Modal";

const aboutModal = <ModalAbout />;
const aboutModalProps = {
  triggerIcon: "about",
  triggerHasTooltip: true,
  triggerTooltipMessage: "About",
  triggerLabel: "About Us",
  modalMaxSize: "max-w-sm sm:max-w-xl",
  tabOrder: "1",
};

const contactModal = <ModalContact />;
const contactModalProps = {
  triggerIcon: "contact",
  triggerHasTooltip: true,
  triggerTooltipMessage: "Contact",
  triggerLabel: "Contact Us",
  modalMaxSize: "max-w-sm sm:max-w-md",
  tabOrder: "2",
};

const Nav = () => (
  <nav
    className="fixed z-10 flex space-x-2 scrollLock-compensation text-size-regular right-4 top-4"
    role="toolbar"
    aria-label="Navigation toolbar"
  >
    <Modal key="About" modalContent={aboutModal} modalProps={aboutModalProps} />
    <Modal
      key="Contact"
      modalContent={contactModal}
      modalProps={contactModalProps}
    />
    <ThemeToggle tabOrder="3" />
  </nav>
);

export default Nav;
