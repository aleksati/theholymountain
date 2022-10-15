import LayoutPage from "../layouts/LayoutPage";
import GridPageMedia from "../components/GridPageMedia";
import GridItemPageMedia from "../components/GridItemPageMedia";
import TitlePageMedia from "../components/TitlePageMedia";
import { useState } from "react";

const PageMediaTwo = ({ data, maxGridCols, children, border = true, page }) => {
  const [items, setItems] = useState({
    videos: false,
    discography: false,
    merch: false,
  });

  return (
    <LayoutPage id={page} className="pb-4" border={border}>
      <TitlePageMedia title={page} />
      <GridPageMedia maxGridCols={maxGridCols}>
        {data.map(item => {
          //   if (items[item.type]) {
          //     // then render the thing
          //   }
          return <GridItemPageMedia key={item.key} item={item} page={page} />;
        })}
      </GridPageMedia>
      {children}
    </LayoutPage>
  );
};

export default PageMediaTwo;
