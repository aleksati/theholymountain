import LayoutPage from "../components/LayoutPage";
import GridPage from "../components/GridPage";
import Video from "../components/Video";
import TitlePage from "../components/TitlePage";

const Videos = ({ videoData, children, maxGridCols }) => (
  <LayoutPage id={"Videos"} className="pb-4">
    <TitlePage title="Videos" />
    <GridPage maxGridCols={maxGridCols}>
      {videoData.map(video => (
        <Video key={video.key} video={video} />
      ))}
    </GridPage>
    {children}
  </LayoutPage>
);

export default Videos;
