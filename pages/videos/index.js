import connectMongo from "../../functions/connectMongo";
import LayoutPage from "../../layouts/LayoutPage";
import VideoData from "../../models/VideoData";
import GridItemVideo from "../../components/GridItemVideo";
import Grid from "../../components/Grid";

const Music = ({ data }) => {
  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | videos`,
      }}>
      <Grid gridCols={1}>
        {data.map((item) => (
          <GridItemVideo key={item.key} item={item} />
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
    const videoData = await VideoData.find();
    let data = await JSON.parse(JSON.stringify(videoData));

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
