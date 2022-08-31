import Icon from "../components/Icon";
import Spinner from "../components/Spinner";
import WrapperLikes from "../components/WrapperLikes";
import getLikesFromDB from "../utils/getLikesFromDB";
import { SITE_DOMAIN } from "../config";
import { useEffect, useState } from "react";

// I set the button state (localBtnState) locally for quicker performance
// it mimicks what I get from the db.

const LikesCounter = () => {
  const [localBtnState, setLocalBtnState] = useState(null);
  const { data, isLoading, isError, mutate } = getLikesFromDB();

  useEffect(() => {
    if (!isLoading && !isError && data.userDoesLike)
      setLocalBtnState(data.userDoesLike);
  }, [data, isLoading, isError]);

  const handleClick = async () => {
    setLocalBtnState(prevState => !prevState);

    try {
      await fetch(`${SITE_DOMAIN}/api/likes/addOrRemoveLike`, {
        method: "POST",
      });
    } catch (error) {
      console.log(error);
    }

    // get fresh like values from likes db through getLikesFromDb()
    mutate();
  };

  if (isError)
    return (
      <WrapperLikes>
        <p>ERROR!!</p>
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
      {/* {console.log("btn-state: ", localBtnState)}
      {console.log("userDoesLike (db): ", data.userDoesLike)}
      {console.log("amount of likes (db): ", data.likes_amount)} */}
      <a
        aria-label="Likes button"
        className="cursor-pointer hover:scale-105"
        onClick={handleClick}
      >
        <Icon
          id="heart"
          iconSize={`text-xl ${localBtnState ? "text-red-400" : null}`}
        />
      </a>
      <p className="m-0 text-size-small">{data.likes_amount}</p>
    </WrapperLikes>
  );
};

export default LikesCounter;
