import LikesCounter from "./LikesCounter";
import EthButton from "./EthButton";
// import Shop from "./Shop";
// import Icon from "./Icon";

// I have to put Icon/audio thing here, not in Shop, because useState" cannot be called conditionally.

const ReleaseActions = ({ item }) => {
  return (
    <div className="flex space-x-2 items-center">
      {/* {item.category.toLowerCase() === "single" || !item.price ? null : (
        <Shop item={item} />
      )} */}
      <LikesCounter releaseKey={item.key} />
      {item.nfturl ? <EthButton url={item.nfturl} /> : null}
      {/* <p>Links to Bandcamp and soundcloud ++</p> */}
    </div>
  );
};

export default ReleaseActions;
