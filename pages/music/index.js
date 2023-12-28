import connectMongo from "../../functions/connectMongo";
import LayoutPage from "../../layouts/LayoutPage";
import MusicData from "../../models/MusicData";
import GridItemMusic from "../../components/GridItemMusic";
import Grid from "../../components/Grid";

const Music = ({ data }) => {
  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | music`,
      }}>
      <Grid maxGridCols={2}>
        {data.map((item) => (
          <GridItemMusic key={item.key} item={item} />
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
    const musicData = await MusicData.find();
    let data = await JSON.parse(JSON.stringify(musicData));

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
