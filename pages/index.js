import AppLayout from "../components/AppLayout";
import FrontPage from "../components/FrontPage/FrontPage";
import PageMedia from "../components/Page/PageMedia";

export default function Home({ sortedMusicData, sortedVideoData }) {
  return (
    <AppLayout>
      <div className="divide-y divide-gray-300 dark:divide-gray-600">
        <FrontPage />
        <PageMedia content={sortedMusicData} pagetitle="discography" />
        <PageMedia content={sortedVideoData} pagetitle="videos" />
      </div>
    </AppLayout>
  );
}

import musicData from "../lib/musicData";
import videoData from "../lib/videoData";

export const getStaticProps = async () => {
  const sortedMusicData = await musicData.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );
  const sortedVideoData = await videoData.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  return {
    props: {
      sortedMusicData,
      sortedVideoData,
    },
  };
};
