import Icon from "../components/Icon";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import WrapperLikes from "../components/WrapperLikes";
import getLikesFromDB from "../utils/getLikesFromDB";
import { SITE_DOMAIN } from "../config";
import { useEffect, useState } from "react";

const LikesCounter = ({ releaseKey }) => {
  const [localBtnState, setLocalBtnState] = useState(null);
  const [localLikesCounter, setLocalLikesCounter] = useState(null);
  const [isLocalError, setIsLocalError] = useState(false);

  const { data, isLoading, isError, mutate } = getLikesFromDB(releaseKey);

  // on mount, and when new data is saved to db (through mutate()),
  // update our local variables
  useEffect(() => {
    if (!isLoading && !isError && data) {
      setLocalBtnState(data.userDoesLike);
      setLocalLikesCounter(data.likesCounter);
    }
  }, [data, isLoading, isError]);

  // manage errors locally
  useEffect(() => {
    setIsLocalError(isError ? true : false);
  }, [isError]);

  const handleClick = async () => {
    // set local state first for a quick UI
    setLocalBtnState(prevState => !prevState);
    setLocalLikesCounter(prevState =>
      localBtnState ? prevState - 1 : prevState + 1
    );

    try {
      // and update the likes in the database
      await fetch(`${SITE_DOMAIN}/api/updateLikes`, {
        method: "PUT",
        body: JSON.stringify({
          key: releaseKey,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Finally, mutate and get fresh likes list from db through getLikesFromDb()
      mutate();
    } catch (error) {
      setIsLocalError(true);
      console.log("Error while fetching likes: ", error.message);
    }
  };

  if (isLocalError)
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
      {/* {console.log("userDoesLike (local): ", localBtnState)}
      {console.log("userDoesLike (db): ", data.userDoesLike)}
      {console.log("likesCounter (local): ", localLikesCounter)}
      {console.log("likesCounter (db): ", data.likesCounter)} */}
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
