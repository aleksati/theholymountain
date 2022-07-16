import React from "react";
import ReportIssues from "../Footer/ReportIssues";
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
  modalMaxSize: "max-w-md",
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

const Nav = ({ reportBtnVisibility }) => (
  <nav className="fixed z-10 flex space-x-2 text-size-small sm:text-size-regular right-4 bottom-4">
    <ReportIssues visibility={reportBtnVisibility} />
    <Modal modalContent={aboutModal} modalProps={aboutModalProps} />
    <Modal modalContent={contactModal} modalProps={contactModalProps} />
    <ThemeToggle tabOrder="3" />
  </nav>
);

export default Nav;
