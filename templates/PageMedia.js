import LayoutPage from "../layouts/LayoutPage";
import GridPageMedia from "../components/GridPageMedia";
import GridItemPageMedia from "../components/GridItemPageMedia";
import TitlePageMedia from "../components/TitlePageMedia";

const PageMedia = ({ data, maxGridCols, children, border = true, page }) => {
  return (
    <LayoutPage id={page} className="pb-4" border={border}>
      <TitlePageMedia title={page} />
      <GridPageMedia maxGridCols={maxGridCols}>
        {data.map(item => (
          <GridItemPageMedia key={item.key} item={item} page={page} />
        ))}
      </GridPageMedia>
      {children}
    </LayoutPage>
  );
};

export default PageMedia;
