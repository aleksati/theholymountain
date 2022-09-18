import LayoutPage from "../layouts/LayoutPage";
import GridPageMedia from "../components/GridPageMedia";
import GridPageMediaItem from "../components/GridPageMediaItem";
import TitlePageMedia from "../components/TitlePageMedia";

const PageMedia = ({ data, maxGridCols, children, page }) => {
  return (
    <LayoutPage id={page} className="pb-4">
      <TitlePageMedia title={page} />
      <GridPageMedia maxGridCols={maxGridCols}>
        {data.map((item) => {
          // just ignore the single for now..
          if (item.key !== "awake" && item.key !== "something")
            return <GridPageMediaItem key={item.key} item={item} page={page} />;
        })}
      </GridPageMedia>
      {children}
    </LayoutPage>
  );
};

export default PageMedia;