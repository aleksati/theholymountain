import React, { useState, useRef, useEffect } from "react";
import { useScrollLock } from "../Hooks/useScrollLock";
import ModalContent from "./ModalContent";

const Modal = ({ modalMaxSize, modalContent, children }) => {
  const [isShown, setIsShown] = useState(false);
  const modalRef = useRef();
  const closeBtnRef = useRef();
  const triggerBtnRef = useRef();
  const contentRefs = useRef({ modalRef, closeBtnRef });
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isShown) {
      closeBtnRef.current.focus();
    }
  }, [isShown, closeBtnRef]);

  const showModal = () => {
    setIsShown(true);
    lockScroll();
  };

  const closeModal = () => {
    setIsShown(false);
    triggerBtnRef.current.focus();
    unlockScroll();
  };

  const onKeyDown = event => {
    if (event.keyCode === 27) return closeModal();
  };

  const onClickOutside = event => {
    if (modalRef.current && modalRef.current.contains(event.target)) return;
    closeModal();
  };

  return (
    <>
      {isShown && (
        <ModalContent
          ref={contentRefs}
          closeModal={closeModal}
          content={modalContent}
          modalMaxSize={modalMaxSize}
          onKeyDown={onKeyDown}
          onClickOutside={onClickOutside}
        />
      )}
      {children(triggerBtnRef, showModal)}
    </>
  );
};

export default Modal;
