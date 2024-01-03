import connectMongo from "../../functions/connectMongo";
import LayoutPage from "../../layouts/LayoutPage";
import MusicData from "../../models/MusicData";
import GridItemMusic from "../../components/GridItemMusic";
import Grid from "../../components/Grid";

const Music = ({ musicData }) => {
  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | music`,
      }}>
      <Grid gridCols={2}>
        {musicData.map((release) => (
          <GridItemMusic
            key={release.key}
            releaseKey={release.key}
            title={release.title}
            category={release.category}
            year={release.year}
          />
        ))}
      </Grid>
    </LayoutPage>
  );
};

export default Music;

export const getStaticProps = async () => {
  try {
    await connectMongo();
    // get data (objects) in an array
    const data = await MusicData.find();
    let musicData = await JSON.parse(JSON.stringify(data));

    // sort the data items by year.
    musicData = await musicData.sort((a, b) => Number(b.year) - Number(a.year));

    return {
      props: {
        musicData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
