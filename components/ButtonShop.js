import ModalShop from "./ModalShop";
import Modal from "./Modal";
import ButtonIconAndText from "./ButtonIconAndText";

const ButtonShop = ({ data }) => {
  const shopModalProps = {
    iconId: "shop",
    label: "Shop release",
    text: "Shop",
    modalMaxSize: "max-w-sm",
  };

  return (
    <Modal
      key="Shop"
      modalContent={<ModalShop />}
      modalMaxSize={shopModalProps.modalMaxSize}
    >
      {(triggerBtnRef, showModal) => (
        <ButtonIconAndText
          ref={triggerBtnRef}
          onClick={showModal}
          {...shopModalProps}
        />
      )}
    </Modal>
  );
};

export default ButtonShop;
