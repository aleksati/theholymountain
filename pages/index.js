import LayoutApp from "../layouts/LayoutApp";
import PageMedia from "../templates/PageMedia";
import PageFront from "../templates/PageFront";
import connectMongo from "../functions/connectMongo";
import MusicData from "../models/MusicData";
import VideoData from "../models/VideoData";
import WrapperShowMore from "../components/WrapperShowMore";

export default function Home({ filteredMusicData, filteredVideoData }) {
  return (
    <LayoutApp>
      <PageFront />
      <PageMedia
        data={filteredMusicData}
        border={false}
        maxGridCols="3"
        page="discography"
      />
      <WrapperShowMore>
        <PageMedia data={filteredVideoData} maxGridCols="2" page="videos" />
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
