import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ShopCheckout = ({ cart, onResetQuantity }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  // calculate the total price
  useEffect(() => {
    const currTotal = cart.reduce((accum, item) => {
      return item.userQuantity * item.price + accum;
    }, 0);
    setTotal(currTotal);
  }, [cart]);

  // create a checkout session with the current cart items
  const createCheckoutSession = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/shop/checkout", {
        method: "POST",
        body: JSON.stringify(cart),
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
    <>
      {/* filler! under the shop items */}
      {/* <div className="h-24"></div> */}
      {/* w-72 */}
      <div className="fixed bottom-0 left-2 w-60 z-50">
        <div className="p-4 my-2 space-y-2 bg-primary-light dark:bg-primary-dark border justify-center border-secondary-skin-light dark:border-secondary-skin-dark">
          <p className="font-bold">Total: {total} kr</p>
          <div className="flex space-x-2">
            <button
              className={`p-2 disabled:cursor-not-allowed rounded flex items-center border hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 border-secondary-skin-light dark:border-secondary-skin-dark w-1/2 justify-center`}
              disabled={total === 0 || isError || isLoading}
              onClick={createCheckoutSession}>
              {isError ? "ERROR" : isLoading ? "Redirecting..." : "checkout"}
            </button>
            <button
              className={`p-2 disabled:cursor-not-allowed rounded flex items-center border hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 border-secondary-skin-light dark:border-secondary-skin-dark justify-center w-1/2`}
              onClick={onResetQuantity}>
              clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCheckout;
