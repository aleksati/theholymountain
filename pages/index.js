import AppLayout from "../components/AppLayout";
// import musicData from "../lib/musicData";
// import videoData from "../lib/videoData";
import Discography from "../sections/Discography";
import FrontPage from "../sections/FrontPage";
import Videos from "../sections/Videos";
import connectMongo from "../utils/connectMongo";
import MusicData from "../models/MusicData";
import VideoData from "../models/VideoData";

export default function Home({ filteredMusicData, filteredVideoData }) {
  return (
    <AppLayout>
      <div className="divide-y divide-secondary-skin-light dark:divide-secondary-skin-dark">
        <FrontPage />
        <Discography musicData={filteredMusicData} maxGridCols="3" />
        <Videos videoData={filteredVideoData} maxGridCols="2" />
      </div>
    </AppLayout>
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

  //   const filteredMusicData = musicData.sort(
  //     (a, b) => Number(b.year) - Number(a.year)
  //   );
  //   const filteredVideoData = videoData.sort(
  //     (a, b) => Number(b.year) - Number(a.year)
  //   );
  //   return {
  //     props: {
  //       filteredMusicData,
  //       filteredVideoData,
  //     },
  //   };
};
