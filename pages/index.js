import musicData from "../lib/musicData";
import videoData from "../lib/videoData";
import FrontPage from "../sections/FrontPage";
import Discography from "../sections/Discography";
import Videos from "../sections/Videos";

export default function Home({ filteredMusicData, filteredVideoData }) {
  return (
    <>
      <FrontPage />
      <Discography musicData={filteredMusicData} maxGridCols="3" />
      <Videos videoData={filteredVideoData} maxGridCols="2" />
    </>
  );
}

export const getStaticProps = async () => {
  const filteredMusicData = musicData.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  const filteredVideoData = videoData.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  return {
    props: {
      filteredMusicData,
      filteredVideoData,
    },
  };
};
