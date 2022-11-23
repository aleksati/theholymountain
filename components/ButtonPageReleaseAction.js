import Icon from "./Icon";
import Shop from "./Shop";

const ButtonPageReleaseAction = ({ item }) => {
  if (item.category.toLowerCase() === "single") return <Icon id="audio" />;
  return <Shop item={item} />;
};

export default ButtonPageReleaseAction;
