// import { useState } from "react";
import LikesCounter from "./LikesCounter";
// import Spinner from "./Spinner";
// import Error from "./Error";
import Shop from "./Shop";

const PageReleaseAction = ({ item }) => {
  return (
    <div className="flex space-x-2 ">
      <Shop item={item} />
      <LikesCounter releaseKey={item.key} />
    </div>
  );
};

export default PageReleaseAction;
