import React, { useState, useRef, useEffect } from "react";
import ModalContent from "./ModalContent";
import ModalTrigger from "./ModalTrigger";

const Modal = ({ modalProps, modalContent }) => {
  const {
    triggerIcon,
    triggerText,
    triggerHasTooltip,
    triggerTooltipMessage,
    triggerLabel,
    modalMaxSize,
    tabOrder,
  } = modalProps;

  const [isShown, setIsShown] = useState(false);
  const modalRef = useRef();
  const closeBtnRef = useRef();
  const triggerBtnRef = useRef();
  const contentRefs = useRef({ modalRef, closeBtnRef });

  useEffect(() => {
    if (isShown) {
      closeBtnRef.current.focus();
    }
  }, [isShown, closeBtnRef]);

  const showModal = () => {
    setIsShown(true);
    toggleScrollLock();
  };

  const closeModal = () => {
    setIsShown(false);
    triggerBtnRef.current.focus();
    toggleScrollLock();
  };

  const onKeyDown = event => {
    if (event.keyCode === 27) return closeModal();
  };

  const onClickOutside = event => {
    if (modalRef.current && modalRef.current.contains(event.target)) return;
    closeModal();
  };

  const toggleScrollLock = () => {
    // document.querySelector("html").classList.toggle("scroll-lock");
  };

  return (
    <>
      {isShown ? (
        <ModalContent
          ref={contentRefs}
          closeModal={closeModal}
          content={modalContent}
          modalMaxSize={modalMaxSize}
          onKeyDown={onKeyDown}
          onClickOutside={onClickOutside}
        />
      ) : null}
      <ModalTrigger
        ref={triggerBtnRef}
        showModal={showModal}
        triggerIcon={triggerIcon}
        triggerText={triggerText}
        triggerHasTooltip={triggerHasTooltip}
        triggerTooltipMessage={triggerTooltipMessage}
        triggerLabel={triggerLabel}
        tabOrder={tabOrder}
      />
    </>
  );
};

export default Modal;
