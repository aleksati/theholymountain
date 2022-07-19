import AppLayout from "../components/AppLayout";
import FrontPage from "../components/FrontPage/FrontPage";
import PageMedia from "../components/Page/PageMedia";

export default function Home({ sortedMusicData, sortedVideoData }) {
  return (
    <AppLayout>
      <FrontPage />
      <PageMedia
        content={sortedMusicData}
        pageTitle="discography"
        maxGridCols="4"
      />
      <PageMedia content={sortedVideoData} pageTitle="videos" maxGridCols="3" />
    </AppLayout>
  );
}

import musicData from "../lib/musicData";
import videoData from "../lib/videoData";

export const getStaticProps = async () => {
  const sortedMusicData = musicData.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );
  const sortedVideoData = videoData.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  return {
    props: {
      sortedMusicData,
      sortedVideoData,
    },
  };
};
