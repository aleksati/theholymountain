import React from "react";
import ModalTrigger from "../Modal/ModalTrigger";
// import ModalDetails from "./ModalDetails";
import ModalAudio from "./ModalAudio";
import ModalShop from "./ModalShop";
import Modal from "../Modal/Modal";

const AlbumToolbar = React.forwardRef(({ album }, ref) => {
  const audioModal = <ModalAudio url={album.spotifyurl} />;
  const audioModalProps = {
    triggerIcon: "audio",
    triggerLabel: "Listen to album",
    triggerText: "Listen",
    modalMaxSize: "max-w-sm sm:max-w-4xl",
  };

  const shopModal = <ModalShop />;
  const shopModalProps = {
    triggerIcon: "shop",
    triggerLabel: "Buy album",
    triggerText: "Shop",
    modalMaxSize: "max-w-sm",
  };
  return (
    <div
      className="flex items-center justify-center space-x-2"
      role="toolbar"
      aria-label="Music album toolbar"
      ref={ref}
    >
      <Modal
        key="Audio"
        modalContent={audioModal}
        modalMaxSize={audioModalProps.modalMaxSize}
      >
        {(triggerBtnRef, showModal) => (
          <ModalTrigger
            ref={triggerBtnRef}
            showModal={showModal}
            {...audioModalProps}
          />
        )}
      </Modal>
      <Modal
        key="Shop"
        modalContent={shopModal}
        modalMaxSize={shopModalProps.modalMaxSize}
      >
        {(triggerBtnRef, showModal) => (
          <ModalTrigger
            ref={triggerBtnRef}
            showModal={showModal}
            {...shopModalProps}
          />
        )}
      </Modal>
    </div>
  );
});

export default AlbumToolbar;
