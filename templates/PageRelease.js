import { useEffect, useState } from "react";
import AudioPageRelease from "../components/AudioPageRelease";
import LikesCounter from "../components/LikesCounter";
import getApiKeys from "../functions/getApiKeys";
import Slideshow from "../components/Slideshow";
import LayoutPage from "../layouts/LayoutPage";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Shop from "../components/Shop";

const PageRelease = ({ item }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [publishableKey, setPublishableKey] = useState();
  const [stripeIsLoading, setStripeIsLoading] = useState(false);
  const [stripeIsError, setStripeIsError] = useState(false);

  // scroll to top. attempt to fix issue on mobile
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setIsMounted(true);
    }, [200]);
  }, []);

  // get stripe publishable key for shop
  const getKeys = async () => {
    setStripeIsLoading(true);
    try {
      const { publishableKey } = await getApiKeys();
      setPublishableKey(publishableKey);
      setStripeIsLoading(false);
    } catch (error) {
      setStripeIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    if (isMounted) {
      getKeys();
    }
  }, [isMounted]);

  return (
    <LayoutPage border={false} className="p-4 md:px-18 lg:px-24">
      <div
        className="grid min-h-screen grid-cols-1 gap-6 md:grid-cols-2 md:space-y-0"
        aria-label={`${item.title} page`}
      >
        <div className="order-1 col-span-1">
          <Slideshow imgSlugs={item.slideshow} />
        </div>
        <div className="order-2 col-span-1">
          <div className="flex flex-col px-4 space-y-4 text-primary-light dark:text-primary-dark">
            <div className="mb-4 space-y-2">
              <div className="font-bold leading-8 text-size-header">
                <h1>{item.title.toUpperCase()}</h1>
              </div>
              <div className="flex text-secondary">
                <p>
                  {item.category} | {item.year}
                </p>
              </div>
              <div className="flex space-x-2 ">
                {stripeIsError ? (
                  <Error />
                ) : stripeIsLoading ? (
                  <Spinner />
                ) : (
                  <Shop item={item} publishableKey={publishableKey} />
                )}
                <LikesCounter releaseKey={item.key} />
              </div>
            </div>
            <div className="space-y-2">
              <p>{item.formatText}</p>
              <p>{item.description}</p>
            </div>
            <AudioPageRelease item={item} />
            <div className="text-secondary text-size-small">
              {item.credits.map((credit, index) => (
                <p key={index}>{credit}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default PageRelease;
