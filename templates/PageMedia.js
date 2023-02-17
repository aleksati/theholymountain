import PageMediaGridItemMusic from "../components/PageMediaGridItemMusic";
import PageMediaGridItemVideo from "../components/PageMediaGridItemVideo";
import PageMediaGrid from "../components/PageMediaGrid";

const PageMedia = ({ data, tab }) => (
  <PageMediaGrid maxGridCols={tab === "music" ? 3 : tab === "video" ? 2 : 3}>
    {data.map((item) => {
      if (tab === "music" && item.type === "music")
        return <PageMediaGridItemMusic key={item.key} item={item} />;
      if (tab === "video" && item.type === "video")
        return <PageMediaGridItemVideo key={item.key} item={item} />;
    })}
  </PageMediaGrid>
);

export default PageMedia;
