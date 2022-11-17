import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import Image from "next/image";

const ModalShop = ({ item, publishableKey }) => {
  const [shopItem, setShopItem] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // inject Stripe into the document headers. This is important.
  const stripePromise = loadStripe(publishableKey);

  useEffect(() => {
    setShopItem({
      key: item.key,
      name: item.title,
      description: item.formatText,
      quantity: 0,
      price: item.price,
    });
  }, []);

  const createCheckOutSession = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/createStripeSession", {
        method: "POST",
        body: JSON.stringify(shopItem),
        headers: { "Content-Type": "application/json" },
      });

      const checkout = await res.json();

      // redirect user to the checkoutpage
      router.push(checkout.url);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="p-2 ">
      <Image
        src={"/img/" + shopItem.key + "-shop.png"}
        width={400}
        height={400}
        alt={shopItem.name}
      />
      <h2 className="text-size-title">Kr {shopItem.price}</h2>
      <h3 className="text-size-regular">{shopItem.name}</h3>
      <p className="text-secondary">{shopItem.description}</p>
      <p className="mt-2 text-size-small text-secondary">Quantity:</p>
      <div className="flex">
        <button
          className={`px-4 rounded items-center border justify-center hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 border-secondary-skin-light dark:border-secondary-skin-dark`}
          onClick={() => {
            setShopItem(prevItem => {
              return {
                ...prevItem,
                quantity: prevItem.quantity > 0 ? prevItem.quantity - 1 : 0,
              };
            });
          }}
        >
          -
        </button>
        <input
          min="0"
          type="number"
          className="w-16 p-2 rounded text-primary-light border-secondary-skin-light dark:border-secondary-skin-dark"
          value={shopItem.quantity}
          onChange={event =>
            setShopItem({
              ...shopItem,
              quantity: event.target.value,
            })
          }
        />
        <button
          className={`px-4 rounded items-center border justify-center hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 border-secondary-skin-light dark:border-secondary-skin-dark`}
          onClick={() => {
            setShopItem(prevItem => {
              return {
                ...prevItem,
                quantity: prevItem.quantity + 1,
              };
            });
          }}
        >
          +
        </button>
      </div>
      <p className="mt-2 text-size-regular">
        Total: Kr {shopItem.quantity * shopItem.price}
      </p>
      <button
        className={`p-2 disabled:cursor-not-allowed rounded flex items-center text-primary-dark bg-button-filter-light border w-full mt-2 justify-center transistion ease-in-out duration-200 border-secondary-skin-light dark:border-secondary-skin-dark hover:border-secondary hover:dark:border-secondary`}
        disabled={shopItem.quantity === 0}
        onClick={createCheckOutSession}
      >
        {isError ? "ERROR" : isLoading ? "Processing..." : "Buy"}
      </button>
    </div>
  );
};

export default ModalShop;
