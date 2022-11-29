import ButtonIconAndText from "./ButtonIconAndText";
import getEnvVar from "../functions/getEnvVar";
import { useEffect, useState, useRef } from "react";
import ModalShop from "./ModalShop";
import Spinner from "./Spinner";
import Modal from "./Modal";
import Error from "./Error";
import ModalTrigger from "./ModalTrigger";

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

  const [modalIsShown, setModalIsShown] = useState(false);
  const modalTriggerRef = useRef();

  const getPubKey = async () => {
    setStripeIsLoading(true);
    try {
      const { STRIPE_PUBLISHABLE_KEY } = await getEnvVar();
      setStripeKey(STRIPE_PUBLISHABLE_KEY);
      setStripeIsLoading(false);
    } catch (error) {
      setStripeIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getPubKey();
  }, []);

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
          {/* <div className="flex items-center justify-center pb-4">
              <p>Web shop coming soon ...</p>
            </div> */}
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
