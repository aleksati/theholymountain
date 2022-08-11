import React, { memo } from "react";
import ClientOnlyPortal from "../ClientOnlyPortal";
import Icon from "../Icon";
import FocusTrap from "focus-trap-react";

// try to cache it better.

const ModalContent = React.forwardRef(
  ({ onClickOutside, onKeyDown, content, closeModal, modalMaxSize }, ref) => {
    const { modalRef, closeBtnRef } = ref.current;

    return (
      <ClientOnlyPortal selector="#modal">
        <FocusTrap>
          {/* The Modal container (popupCard) centered */}
          <aside
            tag="aside"
            role="dialog"
            tabIndex="-1"
            aria-modal="true"
            onClick={onClickOutside}
            onKeyDown={onKeyDown}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 backdrop-brightness-50"
          >
            {/* The Modal Card*/}
            <div
              className={`rounded-md max-h-screen m-2 overflow-auto container mx-auto bg-primary-light dark:bg-primary-dark shadow-md p-4 ${modalMaxSize}`}
              ref={modalRef}
            >
              {/* The close button at the top right */}
              <div className="flex place-content-end">
                <button
                  ref={closeBtnRef}
                  aria-label="Close Modal"
                  onClick={closeModal}
                >
                  <Icon id="closeButton" iconSize={"text-3xl"} />
                </button>
              </div>

              {content}
            </div>
          </aside>
        </FocusTrap>
      </ClientOnlyPortal>
    );
  }
);

ModalContent.displayName = "ModalContent";

export default memo(ModalContent);
