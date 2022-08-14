import PageLayout from "../components/Page/PageLayout";
import connectMongo from "../utils/connectMongo";
import MusicData from "../models/MusicData";
import VideoData from "../models/VideoData";

export default function FindMusic({ musicData, videoData }) {
  return (
    <PageLayout>
      <div>
        {musicData.map(data => (
          <p key={data.key}>{data.title}</p>
        ))}
      </div>
      <div>
        {videoData.map(data => (
          <p key={data.key}>{data.title}</p>
        ))}
      </div>
    </PageLayout>
  );
}

export const getServerSideProps = async () => {
  try {
    await connectMongo();
    const musicData = await MusicData.find();
    const videoData = await VideoData.find();

    return {
      props: {
        musicData: JSON.parse(JSON.stringify(musicData)),
        videoData: JSON.parse(JSON.stringify(videoData)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
