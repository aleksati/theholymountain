import React, { useState, useCallback, useRef, useEffect } from "react";
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
    if (closeBtnRef.current) {
      if (isShown) {
        closeBtnRef.current.focus();
      }
    }
  }, [isShown, closeBtnRef]);

  const showModal = useCallback(() => {
    setIsShown(true);
    lockScroll();
  }, []);

  const closeModal = useCallback(() => {
    setIsShown(false);
    triggerBtnRef.current.focus();
    unlockScroll();
  }, []);

  const onKeyDown = useCallback(event => {
    if (event.keyCode === 27) return closeModal();
  }, []);

  const onClickOutside = useCallback(event => {
    if (modalRef.current && modalRef.current.contains(event.target)) return;
    return closeModal();
  }, []);

  return (
    <>
      {/* Once I first render the modal, I keep it in "cache" so as not to re-render all photos at every time I open it. */}
      {isShown && (
        <ModalContent
          //   isShown={isShown}
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
