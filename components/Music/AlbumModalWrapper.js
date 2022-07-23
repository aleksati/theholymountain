import React from "react";
import ModalDetails from "./ModalDetails";
import Modal from "../Modal/Modal";
import Album from "./Album";

const AlbumModalWrapper = ({ album }) => {
  const detailsModal = <ModalDetails album={album} />;
  const detailsModalProps = {
    triggerIcon: "details",
    triggerLabel: "Album details",
    triggerText: "Details",
    modalMaxSize: "max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl", //2xl:max-w-7xl
  };

  return (
    <Modal
      key="Details"
      modalContent={detailsModal}
      modalMaxSize={detailsModalProps.modalMaxSize}
    >
      {(triggerBtnRef, showModal) => (
        <Album ref={triggerBtnRef} showModal={showModal} album={album} />
      )}
    </Modal>
  );
};

export default AlbumModalWrapper;
