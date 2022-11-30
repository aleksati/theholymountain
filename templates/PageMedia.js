import PageMediaGridItem from "../components/PageMediaGridItem";
import PageMediaGrid from "../components/PageMediaGrid";
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
    <PageMediaGrid maxGridCols={maxGridCols}>
      {data.map((item) => {
        if (item.type === tab) {
          return (
            <PageMediaGridItem key={item.key} item={item} type={item.type} />
          );
        }
      })}
    </PageMediaGrid>
  );
};

export default PageMedia;
