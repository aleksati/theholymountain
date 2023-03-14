// import ButtonIconAndText from "./ButtonIconAndText";
import { useCallback, useEffect, useState, useRef } from "react";
import getEnvVar from "../functions/getEnvVar";
import ModalTrigger from "./ModalTrigger";
import ClientOnly from "./ClientOnly";
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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [modalIsShown, setModalIsShown] = useState(false);
  const modalTriggerRef = useRef();

  const getPubKey = useCallback(async () => {
    setIsLoading(true);
    try {
      const { STRIPE_PUBLISHABLE_KEY } = await getEnvVar();
      setStripeKey(STRIPE_PUBLISHABLE_KEY);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getPubKey();
  }, [getPubKey]);

  return (
    <ClientOnly>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </ClientOnly>
  );
};

export default Shop;
