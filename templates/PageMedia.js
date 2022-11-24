import GridItemPageMedia from "../components/GridItemPageMedia";
import GridPageMedia from "../components/GridPageMedia";
import { useEffect, useState } from "react";

const PageMedia = ({ data, tab }) => {
  const [maxGridCols, setMaxGridCols] = useState(3);

  useEffect(() => {
    if (tab === "music") {
      setMaxGridCols(3);
    }
    if (tab === "video") {
      setMaxGridCols(2);
    }
  }, [tab]);

  return (
    <GridPageMedia maxGridCols={maxGridCols}>
      {data.map(item => {
        if (item.type === tab) {
          return (
            <GridItemPageMedia key={item.key} item={item} type={item.type} />
          );
        }
      })}
    </GridPageMedia>
  );
};

export default PageMedia;
