import ModalShop from "./ModalShop";
import Modal from "./Modal";
import ButtonIconAndText from "./ButtonIconAndText";

const Shop = ({ item, publishableKey }) => {
  const shopModalProps = {
    iconId: "shop",
    label: "Shop release",
    hasTooltip: true,
    tooltipText: `Buy`,
    modalMaxSize: "max-w-sm",
  };

  return (
    <Modal
      key="Shop"
      modalContent={<ModalShop item={item} publishableKey={publishableKey} />}
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

export default Shop;
