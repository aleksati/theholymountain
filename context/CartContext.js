import { createContext, useCallback, useContext, useEffect, useState } from "react";

const CART_STORAGE_KEY = "theholymountain-cart";
const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) setCart(parsedCart);
      }
    } catch (error) {
      console.error("Unable to load the saved cart.", error);
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Unable to save the cart.", error);
    }
  }, [cart, isHydrated]);

  const setItemQuantity = useCallback((item, quantity) => {
    const parsedQuantity = Number(quantity);
    const safeQuantity = Number.isFinite(parsedQuantity)
      ? Math.max(0, Math.floor(parsedQuantity))
      : 0;

    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => cartItem.key === item.key);
      if (safeQuantity === 0) {
        return currentCart.filter((cartItem) => cartItem.key !== item.key);
      }
      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.key === item.key
            ? { ...cartItem, ...item, quantity: safeQuantity }
            : cartItem
        );
      }
      return [...currentCart, { ...item, quantity: safeQuantity }];
    });
  }, []);

  const setItemSize = useCallback((key, size) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.key === key ? { ...item, userSize: size } : item
      )
    );
  }, []);

  const removeItem = useCallback((key) => {
    setCart((currentCart) => currentCart.filter((item) => item.key !== key));
  }, []);

  const value = { cart, setItemQuantity, setItemSize, removeItem };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
