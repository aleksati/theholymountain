import React from "react";
import ReportIssues from "../components/ReportIssues";
import ModalContact from "../components/Nav/ModalContact";
import ModalAbout from "../components/Nav/ModalAbout";
import ThemeToggle from "../components/ThemeToggle";
import Modal from "../components/Modal/Modal";

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
  <nav className="fixed z-10 flex space-x-2 text-size-small sm:text-size-regular right-4 top-4">
    <ReportIssues visibility={reportBtnVisibility} />
    <Modal modalContent={aboutModal} modalProps={aboutModalProps} />
    <Modal modalContent={contactModal} modalProps={contactModalProps} />
    <ThemeToggle tabOrder="3" />
  </nav>
);

export default Nav;
