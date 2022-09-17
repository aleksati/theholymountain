import fetchLikes from "../functions/fetchLikes";
import { useEffect, useState } from "react";
import WrapperLikes from "./WrapperLikes";
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
  const handleClick = async () => {
    setLikesCounter(prevState => (btnState ? prevState - 1 : prevState + 1));
    setBtnState(prevState => !prevState);

    // update the likes counter in the DB
    setFetchMethod("PATCH");
  };

  if (isError)
    return (
      <WrapperLikes>
        <Error />
      </WrapperLikes>
    );

  if (!likesCounter)
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
          iconSize={`text-2xl ${btnState ? "text-red-400" : null}`}
        />
      </a>
      <p className="m-0 text-size-small">{likesCounter}</p>
    </WrapperLikes>
  );
};

export default LikesCounter;
