import ClientOnlyPortal from "./ClientOnlyPortal";
import { useRef, useEffect } from "react";
import ButtonIcon from "./ButtonIcon";
import { useIsMounted } from "../hooks/useIsMounted";

const ModalImage = ({ onModalClose, children }) => {
  const [isMounted, setIsMounted] = useIsMounted(false);
  const closeBtnRef = useRef();
  const modalRef = useRef();

  useEffect(() => {
    if (closeBtnRef.current && isMounted) {
      closeBtnRef.current.focus();
    }
  }, [isMounted, closeBtnRef]);

  const closeModal = () => onModalClose();

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) return closeModal();
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && modalRef.current.contains(e.target)) return;
    return closeModal();
  };

  return (
    <ClientOnlyPortal selector="#modal">
      {/* <FocusTrap> */}
      {/* The Modal container with popupCard centered */}
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        onClick={handleClickOutside}
        onKeyDown={handleKeyDown}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 backdrop-brightness-50">
        {/* The Modal Card*/}
        {/* use "relative" below to have the X inside the modal */}
        <div
          className={`max-h-full p-2 w-full overflow-auto bg-primary-light dark:bg-primary-dark max-w-2xl`}
          ref={modalRef}>
          {children}
          {/* hey */}
          {/* The close button at the top right */}
          <div className="absolute right-0 top-0 p-2">
            <ButtonIcon
              aria-label="Close Modal"
              onClick={closeModal}
              iconSize="text-2xl"
              ref={closeBtnRef}
              iconId="x"
            />
          </div>
        </div>
      </aside>
      {/* </FocusTrap> */}
    </ClientOnlyPortal>
  );
};

ModalImage.displayName = "ModalImage";

export default ModalImage;
