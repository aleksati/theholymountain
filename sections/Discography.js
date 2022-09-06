import LayoutPage from "../components/LayoutPage";
import GridPage from "../components/GridPage";
import DiscographyItem from "../components/DiscographyItem";
import TitlePage from "../components/TitlePage";

const Discography = ({ musicData, children, maxGridCols }) => {
  return (
    <LayoutPage id="discography" className="pb-4">
      <TitlePage title="Discography" />
      <GridPage maxGridCols={maxGridCols}>
        {musicData.map(item => {
          // just ignore the single for now..
          if (item.key !== "awake" && item.key !== "something")
            return <DiscographyItem key={item.key} item={item} />;
        })}
      </GridPage>
      {children}
    </LayoutPage>
  );
};

export default Discography;
