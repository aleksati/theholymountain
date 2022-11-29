import fetchLikes from "../hooks/fetchLikes";
import { useEffect, useState } from "react";
import ClientOnly from "./ClientOnly";
import Spinner from "./Spinner";
import Error from "./Error";
import Icon from "./Icon";

const LikesCounter = ({ releaseKey }) => {
  const [btnState, setBtnState] = useState(null);
  const [likesCounter, setLikesCounter] = useState(null);
  const [fetchMethod, setFetchMethod] = useState("POST");

  const { data, isLoading, isError } = fetchLikes(fetchMethod, releaseKey);

  // on mount, and when new data is saved to db,
  // update/validate our local variables
  useEffect(() => {
    if (isLoading || isError) return;

    setLikesCounter(data.likesCounter);
    setBtnState(data.client.likesRelease);
  }, [data, isLoading, isError]);

  // set local state first for a quick UI
  const handleClick = async (event) => {
    setLikesCounter((prevState) => (btnState ? prevState - 1 : prevState + 1));
    setBtnState((prevState) => !prevState);

    // update the likes counter in the DB
    setFetchMethod("PATCH");
  };

  if (isError)
    return (
      <ClientOnly className="flex items-center space-x-1">
        <Error />
      </ClientOnly>
    );

  // I only want the spinner on mount when the intial values are set
  if (!likesCounter && btnState === null)
    return (
      <ClientOnly className="flex items-center space-x-1">
        <Spinner />
      </ClientOnly>
    );

  return (
    <ClientOnly className="flex items-center space-x-1">
      <button
        disabled={isLoading || isError}
        aria-label="Likes button"
        className="cursor-pointer hover:scale-105"
        onClick={handleClick}
      >
        <Icon
          id="heart"
          iconSize={`text-2xl ${btnState ? "text-red-500" : null}`}
        />
      </button>
      <p className="m-0 text-size-small">{likesCounter}</p>
    </ClientOnly>
  );
};

export default LikesCounter;
