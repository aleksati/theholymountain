import LayoutApp from "../components/LayoutApp";
import Discography from "../sections/Discography";
import FrontPage from "../sections/FrontPage";
import Videos from "../sections/Videos";
import connectMongo from "../utils/connectMongo";
import MusicData from "../models/MusicData";
import VideoData from "../models/VideoData";
import WrapperShowMore from "../components/WrapperShowMore";

export default function Home({ filteredMusicData, filteredVideoData }) {
  return (
    <LayoutApp>
      <FrontPage />
      <Discography musicData={filteredMusicData} maxGridCols="3" />
      <WrapperShowMore>
        <Videos videoData={filteredVideoData} maxGridCols="2" />
      </WrapperShowMore>
    </LayoutApp>
  );
}

export const getStaticProps = async () => {
  try {
    await connectMongo();
    const musicData = await MusicData.find();
    const videoData = await VideoData.find();

    let filteredMusicData = await JSON.parse(JSON.stringify(musicData));
    let filteredVideoData = await JSON.parse(JSON.stringify(videoData));

    filteredMusicData = await filteredMusicData.sort(
      (a, b) => Number(b.year) - Number(a.year)
    );

    filteredVideoData = await filteredVideoData.sort(
      (a, b) => Number(b.year) - Number(a.year)
    );

    return {
      props: {
        filteredMusicData,
        filteredVideoData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
