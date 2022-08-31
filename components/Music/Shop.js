import ModalShop from "./ModalShop";
import Modal from "../Modal/Modal";
import ModalTrigger from "../Modal/ModalTrigger";

const Shop = ({ data }) => {
  const shopModalProps = {
    triggerIcon: "shop",
    triggerLabel: "Buy album",
    triggerText: "Shop",
    modalMaxSize: "max-w-sm",
  };

  return (
    <Modal
      key="Shop"
      modalContent={<ModalShop />}
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
  );
};

export default Shop;