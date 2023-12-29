import { useCallback, useEffect, useState, useRef } from "react";
import getEnvVar from "../functions/getEnvVar";
import { loadStripe } from "@stripe/stripe-js";
import ShopItem from "./ShopItem";
import Loading from "./Loading";
import Error from "./Error";
import Grid from "./Grid";
import ShopCheckout from "./ShopCheckout";

const ShopNew = ({ musicData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [shopData, setShopData] = useState([]);

  // re-organize the musicData into shop data (mainCart) on mount
  useEffect(() => {
    let tempShopData = [];
    musicData.map((item) => {
      // only if the item has a price, meaning it has something for sale
      if (item.price) {
        tempShopData.push({
          key: item.key,
          name: item.title,
          description: item.formatText,
          quantity: 0,
          price: item.price,
        });
      }
    });
    setShopData(tempShopData);
  }, [musicData]);

  // get and set the Stripe key on mount
  const getPubKey = useCallback(async () => {
    setIsLoading(true);
    try {
      // get key from API
      const { STRIPE_PUBLISHABLE_KEY } = await getEnvVar();
      // inject Stripe into the document headers. This is important.
      const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getPubKey();
  }, [getPubKey]);

  // when the quantities of the shopItems change, update the main cart state
  const handleQuantityChange = ({ key, newQuantity }) => {
    setShopData((prevShopData) => {
      let idx = prevShopData.findIndex((item) => item.key === key);
      prevShopData[idx].quantity = newQuantity;
      return [...prevShopData];
    });
  };

  // reset all quantities
  const handleResetQuantity = () => {
    setShopData((prevShopData) => {
      prevShopData.forEach((item) => (item.quantity = 0));
      return [...prevShopData];
    });
  };

  if (isError)
    return (
      <div className="flex min-h-screen items-start">
        <Error />
      </div>
    );

  if (isLoading || shopData.length === 0)
    return (
      <div className="flex min-h-screen items-start">
        <Loading />
      </div>
    );

  return (
    <div>
      <Grid gridCols={2}>
        {shopData.map((shopItem) => (
          <ShopItem
            key={shopItem.key}
            shopItem={shopItem}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </Grid>
      <ShopCheckout shopData={shopData} onResetQuantity={handleResetQuantity} />
    </div>
  );
};

export default ShopNew;
