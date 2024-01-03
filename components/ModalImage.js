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
        {/* bg-primary-light dark:bg-primary-dark */}
        {/* bg-transparent */}
        <div
          className={`max-h-screen w-full bg-transparent max-w-3xl`}
          ref={modalRef}>
          {children}
          {/* The close button at the top right */}
          <div className="absolute right-4 top-2">
            <ButtonIcon
              ref={closeBtnRef}
              aria-label="Close Modal"
              onClick={closeModal}
              iconSize="text-3xl"
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
