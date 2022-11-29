// import ButtonIconAndText from "./ButtonIconAndText";
import { useCallback, useEffect, useState, useRef } from "react";
import getEnvVar from "../functions/getEnvVar";
import ModalTrigger from "./ModalTrigger";
import ModalShop from "./ModalShop";
import Spinner from "./Spinner";
import Modal from "./Modal";
import Error from "./Error";

const shopModalProps = {
  iconId: "shop",
  label: "Shop album",
  hasTooltip: true,
  tooltipText: `shop`,
  modalMaxSize: "max-w-md",
};

const Shop = ({ item }) => {
  const [stripeKey, setStripeKey] = useState();
  const [stripeIsLoading, setStripeIsLoading] = useState(false);
  const [stripeIsError, setStripeIsError] = useState(false);

  const [modalIsShown, setModalIsShown] = useState(false);
  const modalTriggerRef = useRef();

  const getPubKey = useCallback(async () => {
    setStripeIsLoading(true);
    try {
      const { STRIPE_PUBLISHABLE_KEY } = await getEnvVar();
      setStripeKey(STRIPE_PUBLISHABLE_KEY);
      setStripeIsLoading(false);
    } catch (error) {
      setStripeIsError(true);
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getPubKey();
  }, [getPubKey]);

  if (stripeIsError) {
    return <Error />;
  }

  if (stripeIsLoading) {
    return <Spinner />;
  }

  return (
    <>
      {modalIsShown ? (
        <Modal
          key="Shop"
          modalIsShown={modalIsShown}
          modalTriggerRef={modalTriggerRef}
          setModalIsShown={setModalIsShown}
          modalMaxSize={shopModalProps.modalMaxSize}
        >
          <ModalShop item={item} publishableKey={stripeKey} />
        </Modal>
      ) : null}
      <ModalTrigger
        ref={modalTriggerRef}
        modalProps={shopModalProps}
        onModalTrigger={() => setModalIsShown(true)}
      />
    </>
  );
};

export default Shop;
