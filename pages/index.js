import AppLayout from "../components/AppLayout";
import Discography from "../sections/Discography";
import FrontPage from "../sections/FrontPage";
import Videos from "../sections/Videos";
import connectMongo from "../utils/connectMongo";
import MusicData from "../models/MusicData";
import VideoData from "../models/VideoData";
import ShowMoreWrapper from "../components/ShowMoreWrapper";

export default function Home({ filteredMusicData, filteredVideoData }) {
  return (
    <AppLayout>
      <FrontPage />
      <Discography musicData={filteredMusicData} maxGridCols="3" />
      <ShowMoreWrapper>
        <Videos videoData={filteredVideoData} maxGridCols="2" />
      </ShowMoreWrapper>
    </AppLayout>
  );
}

// import singleData from "../public/singleData/singleData.js";

export const getStaticProps = async () => {
  try {
    await connectMongo();
    const musicData = await MusicData.find();
    const videoData = await VideoData.find();

    let filteredMusicData = await JSON.parse(JSON.stringify(musicData));
    let filteredVideoData = await JSON.parse(JSON.stringify(videoData));

    // add new singles
    // filteredMusicData.push(...singleData);

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
