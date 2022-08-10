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
