import ButtonIconAndText from "./ButtonIconAndText";
import getApiKeys from "../functions/getApiKeys";
import { useEffect, useState } from "react";
import ModalShop from "./ModalShop";
import Spinner from "./Spinner";
import Modal from "./Modal";
import Error from "./Error";

const shopModalProps = {
  iconId: "shop",
  label: "Shop release",
  hasTooltip: true,
  tooltipText: `Buy`,
  modalMaxSize: "max-w-md",
};

const Shop = ({ item }) => {
  const [stripeKey, setStripeKey] = useState();
  const [stripeIsLoading, setStripeIsLoading] = useState(false);
  const [stripeIsError, setStripeIsError] = useState(false);

  // get stripe publishable key for shop
  const getKeys = async () => {
    setStripeIsLoading(true);
    try {
      const { publishableKey } = await getApiKeys();
      setStripeKey(publishableKey);
      setStripeIsLoading(false);
    } catch (error) {
      setStripeIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getKeys();
  }, []);

  if (stripeIsError) {
    return <Error />;
  }

  if (stripeIsLoading) {
    return <Spinner />;
  }

  return (
    <Modal
      key="Shop"
      modalContent={
        <div className="flex items-center justify-center pb-4">
          <p>Web shop coming soon ...</p>
        </div>
      }
      // modalContent={<ModalShop item={item} publishableKey={stripeKey} />}
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
