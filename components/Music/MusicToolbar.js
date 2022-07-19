import React from "react";
import ModalDetails from "./ModalDetails";
import ModalAudio from "./ModalAudio";
import ModalShop from "./ModalShop";
import Modal from "../Modal/Modal";

const MusicToolbar = ({ item }) => {
  const detailsModal = <ModalDetails album={item} />;
  const detailsModalProps = {
    triggerIcon: "details",
    triggerLabel: "Album details",
    triggerText: "Details",
    modalMaxSize: "max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl", //2xl:max-w-7xl
    btnSize: "text-size-md sm:text-size-small",
  };

  const audioModal = <ModalAudio url={item.spotifyurl} />;
  const audioModalProps = {
    triggerIcon: "audio",
    triggerLabel: "Listen to album",
    triggerText: "Listen",
    modalMaxSize: "max-w-sm sm:max-w-4xl",
    btnSize: "text-size-md sm:text-size-small",
  };

  const shopModal = <ModalShop />;
  const shopModalProps = {
    triggerIcon: "shop",
    triggerLabel: "Buy album",
    triggerText: "Shop",
    modalMaxSize: "max-w-sm",
    btnSize: "text-size-md sm:text-size-small",
  };
  return (
    <div
      className="flex items-center justify-center space-x-2"
      role="toolbar"
      aria-label="Music album toolbar"
    >
      <Modal
        key="Details"
        modalContent={detailsModal}
        modalProps={detailsModalProps}
      />
      <Modal
        key="Audio"
        modalContent={audioModal}
        modalProps={audioModalProps}
      />
      <Modal key="Shop" modalContent={shopModal} modalProps={shopModalProps} />
    </div>
  );
};

export default MusicToolbar;
