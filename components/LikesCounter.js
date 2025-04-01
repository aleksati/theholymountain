import { useEffect, useState, useRef } from "react";
import { SITE_DOMAIN } from "../config";
import ClientOnly from "./ClientOnly";
import Loading from "./Loading";
import Error from "./Error";
import Icon from "./Icon";

// Updates the db likes counter data on unmount

const LikesCounter = ({ releaseKey }) => {
  const [btnState, setBtnState] = useState(null); // true if like, false if not
  const [likesCounter, setLikesCounter] = useState(null); // the number of likes (number)
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const btnStateRef = useRef(btnState);

  // get likes from the database and update states
  const fetchLikes = async (releaseKey) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${SITE_DOMAIN}/api/likes`, {
        method: "POST",
        body: JSON.stringify({ key: releaseKey }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setLikesCounter(data.likesCounter);
      setBtnState(data.client.likesRelease);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };

  // updates the likes in the database
  const updateLikes = async (btnState, releaseKey) => {
    try {
      await fetch(`${SITE_DOMAIN}/api/likes`, {
        method: "PATCH",
        body: JSON.stringify({ key: releaseKey, state: btnState }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // this keeps track of the btnState to use in onmount function updateLikes.
  useEffect(() => {
    btnStateRef.current = btnState;
  }, [btnState]);

  // on mount
  useEffect(() => {
    // get the likesCounter state from db
    fetchLikes(releaseKey);
    // on unmount, update the likesCounter in the db with the browser state
    // return () => updateLikes(btnStateRef.current, releaseKey);
  }, [releaseKey]);

  //when clicking the button
  const handleClick = async () => {
    setLikesCounter((prevState) => (btnState ? prevState - 1 : prevState + 1));
    setBtnState((prevState) => !prevState);
    updateLikes(!btnState, releaseKey);
  };

  return (
    <ClientOnly className="flex items-center space-x-1">
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          <button
            // disabled={isLoading || isError}
            aria-label="Likes button"
            className="cursor-pointer hover:scale-105"
            onClick={handleClick}>
            <Icon
              id="heart"
              iconSize={`text-2xl ${btnState ? "text-red-500" : null}`}
            />
          </button>
          <p className="m-0 text-xl">{likesCounter}</p>
        </>
      )}
    </ClientOnly>
  );
};

export default LikesCounter;
