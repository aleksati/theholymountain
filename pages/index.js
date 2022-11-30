import connectMongo from "../functions/connectMongo";
import LayoutPage from "../layouts/LayoutPage";
import MusicData from "../models/MusicData";
import VideoData from "../models/VideoData";
import PageMedia from "../templates/PageMedia";

const pageMeta = {
  title: "The Holy Mountain",
  keywords:
    "band, music, norway, artist, avant-garde, pop, minimalism, dreampop, electropop, akkordeon, accordion, synthesizer, synthwave, drums, roland juno, vocals, The Holy Mountain, The Holy Mountain discography, The Holy Mountain shows, The Holy Mountain albums, The Holy Mountain merch, The Holy Mountain video, The Holy Mountain music, The Holy Mountain band, The Holy Mountain, Accordion band, Accordion trio, trekkspillmusikk",
  description: "The official website of The Holy Mountain trio",
  url: "https://www.theholymountain.net",
};

const Home = ({ data }) => {
  return (
    <LayoutPage showMediaTabControls={true} showMenu={true} pageMeta={pageMeta}>
      {(activeTab) => <PageMedia data={data} tab={activeTab} />}
    </LayoutPage>
  );
};

export default Home;

export const getStaticProps = async () => {
  try {
    await connectMongo();
    // get data (objects) in an array
    const musicData = await MusicData.find();
    const videoData = await VideoData.find();

    let filteredMusicData = await JSON.parse(JSON.stringify(musicData));
    let filteredVideoData = await JSON.parse(JSON.stringify(videoData));

    // concat into one array
    let data = filteredMusicData.concat(filteredVideoData);

    // sort the data items by year.
    data = await data.sort((a, b) => Number(b.year) - Number(a.year));

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
