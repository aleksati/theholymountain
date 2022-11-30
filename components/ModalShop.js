import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import Image from "next/image";

const ModalShop = ({ item, publishableKey }) => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shopItem, setShopItem] = useState({
    key: "",
    name: "",
    description: "",
    quantity: "",
    price: "",
  });

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
  }, [item]);

  const createCheckoutSession = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/shop/checkout", {
        method: "POST",
        body: JSON.stringify(shopItem),
        headers: { "Content-Type": "application/json" },
      });

      const checkout = await res.json();
      // redirect user to the checkoutpage
      router.push(checkout.url);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <Image
        blurDataURL={`/img/placeholders/${item.key}-shop.png`}
        src={`/img/${item.key}-shop.png`}
        alt={item.name}
        placeholder="blur"
        width={400}
        height={400}
      />
      <h2 className="text-size-title">Kr {shopItem.price}</h2>
      {/* <p className="text-size-regular text-red-400 font-bold">
        NB: STILL UNDER DEVELOPMENT
      </p> */}
      <p className="text-size-regular">{shopItem.name}</p>
      <p className="text-secondary">{shopItem.description}</p>
      <p className="mt-2 text-size-small text-secondary">Quantity:</p>
      <div className="flex space-x-1">
        <button
          className={`px-4 rounded items-center border justify-center hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 border-secondary-skin-light dark:border-secondary-skin-dark`}
          onClick={() => {
            setShopItem((prevItem) => {
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
          className="w-12 p-2 text-center rounded dark:bg-primary-dark bg-primary-light text-primary-light dark:text-primary-dark border-secondary-skin-light dark:border-secondary-skin-dark"
          value={shopItem.quantity}
          onChange={(event) =>
            setShopItem({
              ...shopItem,
              quantity: event.target.value,
            })
          }
        />
        <button
          className={`px-4 rounded items-center border justify-center hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 border-secondary-skin-light dark:border-secondary-skin-dark`}
          onClick={() => {
            setShopItem((prevItem) => {
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
        className={`p-2 disabled:cursor-not-allowed rounded flex items-center text-primary-dark bg-button-filter-light w-full mt-2 justify-center transistion ease-in-out duration-200`}
        disabled={shopItem.quantity === 0 || isError || isLoading}
        onClick={createCheckoutSession}
      >
        {isError ? "ERROR" : isLoading ? "Redirecting..." : "To checkout"}
      </button>
    </div>
  );
};

export default ModalShop;
