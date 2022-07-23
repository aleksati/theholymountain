import PageLayout from "../components/Page/PageLayout";
import PageGrid from "../components/Page/PageGrid";
import Video from "../components/Videos/Video";
import PageTitle from "../components/Page/PageTitle";

const Videos = ({ videoData, children, maxGridCols }) => (
  <PageLayout id={"Videos"} className="pb-4">
    <PageTitle title="Videos" />
    <PageGrid maxGridCols={maxGridCols}>
      {videoData.map(video => (
        <Video key={video.key} video={video} />
      ))}
    </PageGrid>
    {children}
  </PageLayout>
);

export default Videos;
