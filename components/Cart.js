import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/router";
import Image from "next/image";
import Icon from "./Icon";
import { useCart } from "../context/CartContext";

const formatPrice = (price) =>
  new Intl.NumberFormat("nb-NO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(price) || 0);

const getItemImage = (key) =>
  `/img/shop/${key}-shop-1.${key === "thedawnsherearequiet" ? "jpg" : "png"}`;

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const { cart, setItemQuantity, removeItem } = useCart();
  const router = useRouter();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * item.quantity,
    0
  );

  const createCheckoutSession = async () => {
    setIsCheckoutLoading(true);
    setCheckoutError("");

    try {
      const checkoutCart = cart.map((item) => ({
        ...item,
        userQuantity: item.quantity,
      }));
      const response = await fetch("/api/shop/checkout", {
        method: "POST",
        body: JSON.stringify(checkoutCart),
        headers: { "Content-Type": "application/json" },
      });
      const responseBody = await response.text();
      let checkout = {};

      try {
        checkout = responseBody ? JSON.parse(responseBody) : {};
      } catch {
        checkout = {};
      }

      if (!response.ok) {
        throw new Error(
          checkout.message ||
            checkout.error ||
            responseBody ||
            "Checkout could not be started."
        );
      }
      if (!checkout.url) {
        throw new Error("Checkout did not return a Stripe URL.");
      }

      await router.push(checkout.url);
    } catch (error) {
      console.error("Unable to start checkout.", error);
      setCheckoutError(error.message || "Checkout could not be started.");
      setIsCheckoutLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={`Open cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="relative p-1 hover:opacity-70">
        <Icon id="cart" iconSize="text-xl md:text-xl" />
        {itemCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-300 px-1 text-xs font-semibold text-black">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/60"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}>
            <aside
              role="dialog"
              aria-modal="true"
              aria-labelledby="cart-title"
              className="absolute right-0 top-0 flex h-full w-full max-w-[26rem] flex-col bg-black px-6 pb-6 pt-5 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <h2
                id="cart-title"
                className="text-size-title font-bold uppercase tracking-wide">
                Cart
                {itemCount > 0 && (
                  <span className="ml-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-sky-300 px-1.5 text-sm font-medium text-black">
                    {itemCount}
                  </span>
                )}
              </h2>
              <button
                type="button"
                aria-label="Close cart"
                onClick={() => setIsOpen(false)}
                className="p-1 text-2xl leading-none hover:opacity-70">
                <Icon id="x" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex flex-1 items-center justify-center">
                <h3 className="text-center text-xl font-bold uppercase">
                  Your cart is empty
                </h3>
              </div>
            ) : (
              <>
                <ul className="mt-6 flex-1 space-y-5 overflow-y-auto">
                  {cart.map((item) => (
                    <li key={item.key} className="flex gap-4">
                      <div className="relative h-20 w-20 shrink-0">
                        <Image
                          src={getItemImage(item.key)}
                          alt={item.title}
                          layout="fill"
                          objectFit="contain"
                          unoptimized
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-bold uppercase leading-tight">
                              {item.title}
                            </p>
                            {(item.userSize || item.description) && (
                              <p className="text-sm text-gray-300">
                                {item.userSize || item.description}
                              </p>
                            )}
                          </div>
                          <p className="shrink-0 text-sm font-semibold">
                            kr {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                          <div className="flex items-center rounded border border-white/20 text-sm">
                            <button
                              type="button"
                              aria-label={`Decrease ${item.title} quantity`}
                              onClick={() =>
                                setItemQuantity(item, item.quantity - 1)
                              }
                              className="px-2 py-1 hover:bg-white/10">
                              −
                            </button>
                            <span className="min-w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label={`Increase ${item.title} quantity`}
                              onClick={() =>
                                setItemQuantity(item, item.quantity + 1)
                              }
                              className="px-2 py-1 hover:bg-white/10">
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            aria-label={`Remove ${item.title} from cart`}
                            onClick={() => removeItem(item.key)}
                            className="text-sm text-gray-300 underline hover:text-white">
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 space-y-4 border-t border-white/20 pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Estimated total</span>
                    <span>kr {formatPrice(total)}</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Taxes included. Discounts and shipping calculated at
                    checkout.
                  </p>
                  <button
                    type="button"
                    disabled={isCheckoutLoading || cart.length === 0}
                    onClick={createCheckoutSession}
                    className="w-full rounded-full bg-sky-300 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-sky-400">
                    {isCheckoutLoading ? "Redirecting..." : "Checkout"}
                  </button>
                  {checkoutError && (
                    <p role="alert" className="text-sm text-red-400">
                      {checkoutError}
                    </p>
                  )}
                </div>
              </>
            )}
            </aside>
          </div>,
          document.body
        )}
    </>
  );
};

export default Cart;
