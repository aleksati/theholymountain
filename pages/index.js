import LayoutApp from "../layouts/LayoutApp";
import PageMedia from "../templates/PageMedia";
import PageFront from "../templates/PageFront";
import connectMongo from "../functions/connectMongo";
import MusicData from "../models/MusicData";
import VideoData from "../models/VideoData";
import WrapperShowMore from "../components/WrapperShowMore";
import { SITE_DOMAIN } from "../config";

export default function Home({ filteredMusicData, filteredVideoData }) {
  const meta = {
    title: "The Holy Mountain",
    keywords:
      "band, music, norway, artist, avant-garde, pop, minimalism, dreampop, electropop, akkordeon, accordion, synthesizer, synthwave, drums, roland juno, vocals, The Holy Mountain, The Holy Mountain discography, The Holy Mountain shows, The Holy Mountain albums, The Holy Mountain merch, The Holy Mountain video, The Holy Mountain music, The Holy Mountain band, The Holy Mountain, Accordion band, Accordion trio, trekkspillmusikk",
    description: "The official website of The Holy Mountain trio",
    url: `${SITE_DOMAIN}`,
  };

  return (
    <LayoutApp appMeta={meta}>
      <PageFront />
      <PageMedia
        data={filteredMusicData}
        border={false}
        maxGridCols="3"
        page="Discography"
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
