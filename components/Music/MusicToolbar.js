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
    triggerText: " Details",
    modalMaxSize: "max-w-4xl",
  };

  const audioModal = <ModalAudio url={item.spotifyurl} />;
  const audioModalProps = {
    triggerIcon: "audio",
    triggerLabel: "Listen to album",
    triggerText: " Listen",
    modalMaxSize: "max-w-4xl",
  };

  const shopModal = <ModalShop />;
  const shopModalProps = {
    triggerIcon: "shop",
    triggerLabel: "Buy album",
    triggerText: " Shop",
    modalMaxSize: "max-w-4xl",
  };
  return (
    <div className="flex items-center justify-center space-x-2 text-size-small">
      <Modal modalContent={detailsModal} modalProps={detailsModalProps} />
      <Modal modalContent={audioModal} modalProps={audioModalProps} />
      <Modal modalContent={shopModal} modalProps={shopModalProps} />
    </div>
  );
};

export default MusicToolbar;
