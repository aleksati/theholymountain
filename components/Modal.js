import { useScrollLock } from "../hooks/useScrollLock";
import PortalClientOnly from "./PortalClientOnly";
import { useRef, useEffect } from "react";
import FocusTrap from "focus-trap-react";
import React, { memo } from "react";
import Icon from "./Icon";

const Modal = ({
  modalMaxSize,
  setModalIsShown,
  modalIsShown,
  modalTriggerRef,
  children,
}) => {
  const { lockScroll, unlockScroll } = useScrollLock();
  const closeBtnRef = useRef();
  const modalRef = useRef();

  useEffect(() => {
    if (closeBtnRef.current) {
      if (modalIsShown) {
        closeBtnRef.current.focus();
      }
    }
  }, [modalIsShown, closeBtnRef]);

  // on mount, lock scroll, on unmount unlock scroll
  useEffect(() => {
    lockScroll();
    return () => unlockScroll();
  }, []);

  const closeModal = () => {
    setModalIsShown(false);
    modalTriggerRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) return closeModal();
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && modalRef.current.contains(e.target)) return;
    return closeModal();
  };

  return (
    <PortalClientOnly selector="#modal">
      <FocusTrap>
        {/* The Modal container (popupCard) centered */}
        <aside
          tag="aside"
          role="dialog"
          tabIndex="-1"
          aria-modal="true"
          onClick={handleClickOutside}
          onKeyDown={handleKeyDown}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 backdrop-brightness-50"
        >
          {/* The Modal Card*/}
          <div
            // border border-secondary-skin-light dark:border-secondary-skin-dark
            className={`max-h-screen m-2 overflow-auto container mx-auto bg-primary-light dark:bg-primary-dark shadow-md p-4 ${modalMaxSize}`}
            ref={modalRef}
          >
            {/* The close button at the top right */}
            <div className="flex place-content-end">
              <button
                ref={closeBtnRef}
                aria-label="Close Modal"
                onClick={closeModal}
              >
                <Icon id="x" iconSize="text-3xl" />
              </button>
            </div>

            {children}
          </div>
        </aside>
      </FocusTrap>
    </PortalClientOnly>
  );
};

Modal.displayName = "Modal";

export default memo(Modal);
