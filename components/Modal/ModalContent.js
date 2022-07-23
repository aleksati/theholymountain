import React, { memo, useEffect, useState } from "react";
import Icon from "../Icon";
import FocusTrap from "focus-trap-react";

const ModalContent = React.forwardRef(
  ({ onClickOutside, onKeyDown, content, closeModal, modalMaxSize }, ref) => {
    const { modalRef, closeBtnRef } = ref.current;
    const [isMounted, setIsMounted] = useState(false);

    // so pressing Enter to open the modal
    // doesnt close it again immediatley
    useEffect(() => {
      setIsMounted(true);
    }, []);

    return (
      // The Modal container (popupCard) centered
      <FocusTrap>
        <aside
          tag="aside"
          role="dialog"
          tabIndex="-1"
          aria-modal="true"
          onClick={onClickOutside}
          onKeyDown={onKeyDown}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-brightness-50"
        >
          {/* The Modal Card*/}
          <div
            className={`rounded-md bg-primary-light border border-secondary dark:bg-primary-dark shadow-md p-4 ${modalMaxSize}`}
            ref={modalRef}
          >
            {/* The close button at the top right */}
            {isMounted && (
              <div className="flex place-content-end">
                <button
                  ref={closeBtnRef}
                  aria-label="Close Modal"
                  onClick={closeModal}
                >
                  <Icon id="closeButton" iconSize={"text-lg"} />
                </button>
              </div>
            )}
            {content}
          </div>
        </aside>
      </FocusTrap>
    );
  }
);

ModalContent.displayName = "ModalContent";

export default memo(ModalContent);
