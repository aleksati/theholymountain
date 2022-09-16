import fetchLikes from "../functions/fetchLikes";
import { useEffect, useState } from "react";
import WrapperLikes from "./WrapperLikes";
import Spinner from "./Spinner";
import Error from "./Error";
import Icon from "./Icon";

const LikesCounter = ({ releaseKey }) => {
  const [localBtnState, setLocalBtnState] = useState(null);
  const [localLikesCounter, setLocalLikesCounter] = useState(null);
  const [fetchMethod, setFetchMethod] = useState("POST");

  const { data, isLoading, isError } = fetchLikes(fetchMethod, releaseKey);

  // on mount, and when new data is saved to db,
  // update/validate our local variables
  useEffect(() => {
    if (isLoading || isError) return;

    setLocalBtnState(data.client.likesRelease);
    setLocalLikesCounter(data.likesCounter);
  }, [data, isLoading, isError]);

  // set local state first for a quick UI
  const handleClick = async () => {
    setLocalLikesCounter(prevState =>
      localBtnState ? prevState - 1 : prevState + 1
    );
    setLocalBtnState(prevState => !prevState);

    // update the likes counter in the DB
    setFetchMethod("PATCH");
  };

  if (isError)
    return (
      <WrapperLikes>
        <Error />
      </WrapperLikes>
    );

  if (isLoading)
    return (
      <WrapperLikes>
        <Spinner />
      </WrapperLikes>
    );

  return (
    <WrapperLikes>
      <a
        aria-label="Likes button"
        className="cursor-pointer hover:scale-105"
        onClick={handleClick}
      >
        <Icon
          id="heart"
          iconSize={`text-2xl ${localBtnState ? "text-red-400" : null}`}
        />
      </a>
      <p className="m-0 text-size-small">{localLikesCounter}</p>
    </WrapperLikes>
  );
};

export default LikesCounter;
