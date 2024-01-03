import { useCallback, useEffect, useState } from "react";
import ShopCheckout from "../components/ShopCheckout";
import connectMongo from "../functions/connectMongo";
import getEnvVar from "../functions/getEnvVar";
import { loadStripe } from "@stripe/stripe-js";
import LayoutPage from "../layouts/LayoutPage";
import ShopItem from "../components/ShopItem";
import Loading from "../components/Loading";
import ShopData from "../models/ShopData";
import Error from "../components/Error";
import Grid from "../components/Grid";

const pageMeta = {
  title: `The Holy Mountain | shop`,
};

const Shop = ({ shopData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [cart, setCart] = useState([]);

  // store shopData as (cart) so I can update the quantity and pass to checkout
  useEffect(() => {
    setCart(shopData);
  }, [shopData]);

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

  // when the quantities of the shopItems change, update the cart
  const handleQuantityChange = ({ key, newQuantity }) => {
    setCart((prevCart) => {
      let idx = prevCart.findIndex((item) => item.key === key);
      prevCart[idx].quantity = newQuantity;
      return [...prevCart];
    });
  };

  // reset all quantities
  const handleResetQuantity = () => {
    setCart((prevCart) => {
      prevCart.forEach((item) => (item.quantity = 0));
      return [...prevCart];
    });
  };

  if (isError)
    return (
      <LayoutPage pageMeta={pageMeta}>
        <div className="p-4 flex min-h-screen items-start">
          <Error />
        </div>
      </LayoutPage>
    );

  if (isLoading || cart.length === 0)
    return (
      <LayoutPage pageMeta={pageMeta}>
        <div className="p-4 flex min-h-screen items-start">
          <Loading />
        </div>
      </LayoutPage>
    );

  return (
    <LayoutPage pageMeta={pageMeta}>
      <Grid gridCols={2}>
        {cart.map((item) => (
          <ShopItem
            key={item.key}
            shopItem={item}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </Grid>
      <ShopCheckout cart={cart} onResetQuantity={handleResetQuantity} />
    </LayoutPage>
  );
};

export default Shop;

export const getStaticProps = async () => {
  try {
    await connectMongo();
    // get data (objects) in an array
    const data = await ShopData.find();
    let shopData = await JSON.parse(JSON.stringify(data));

    // sort the data items by year.
    shopData = await shopData.sort((a, b) => Number(b.year) - Number(a.year));

    return {
      props: {
        shopData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
