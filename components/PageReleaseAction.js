import Icon from "./Icon";
import Shop from "./Shop";

const PageReleaseAction = ({ item }) => {
  if (item.category.toLowerCase() === "single") return <Icon id="audio" />;
  return <Shop item={item} />;
};

export default PageReleaseAction;
