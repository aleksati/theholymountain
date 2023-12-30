import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ShopCheckout = ({ shopData, onResetQuantity }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [total, setTotal] = useState(0);

  // calculate the total price
  useEffect(() => {
    const currTotal = shopData.reduce((accum, item) => {
      return item.quantity * item.price + accum;
    }, 0);
    setTotal(currTotal);
  }, [shopData]);

  // create a checkout session with the current cart items
  const createCheckoutSession = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/shop/checkout", {
        method: "POST",
        body: JSON.stringify(shopData),
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
    <div
      className="p-6 my-4 w-full space-y-2 bg-primary-light dark:bg-primary-dark p-2
    border justify-center border-secondary-skin-light dark:border-secondary-skin-dark
    
    ">
      <p className="text-lg">Total: Kr {total}</p>
      <div className="flex space-x-2">
        <button
          className={`p-2 disabled:cursor-not-allowed rounded flex items-center text-primary-dark bg-button-filter-light w-1/2 justify-center`}
          disabled={total === 0 || isError || isLoading}
          onClick={createCheckoutSession}>
          {isError ? "ERROR" : isLoading ? "Redirecting..." : "To checkout"}
        </button>
        <button
          className={`p-2 disabled:cursor-not-allowed rounded flex items-center text-primary-dark bg-blue-400 justify-center w-1/2`}
          onClick={onResetQuantity}>
          Clear items
        </button>
      </div>
    </div>
  );
};

export default ShopCheckout;
