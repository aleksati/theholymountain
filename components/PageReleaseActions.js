import LikesCounter from "./LikesCounter";
import Shop from "./Shop";
import Icon from "./Icon";

// I have to put Icon/audio thing here, not in Shop, because useState" cannot be called conditionally.

const PageReleaseActions = ({ item }) => {
  return (
    <div className="flex space-x-2 items-center">
      {item.category.toLowerCase() === "single" ? (
        <Icon id="audio" />
      ) : (
        <Shop item={item} />
      )}
      <LikesCounter releaseKey={item.key} />
    </div>
  );
};

export default PageReleaseActions;
