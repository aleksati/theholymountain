import connectMongo from "../../functions/connectMongo";
import LayoutPage from "../../layouts/LayoutPage";
import VideoData from "../../models/VideoData";
import GridItemVideo from "../../components/GridItemVideo";
import Grid from "../../components/Grid";

const Videos = ({ videoData }) => {
  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | videos`,
      }}>
      <Grid gridCols={1}>
        {videoData.map((release) => (
          <GridItemVideo
            key={release.key}
            title={release.title}
            url={release.url}
            category={release.category}
            year={release.year}
          />
        ))}
      </Grid>
    </LayoutPage>
  );
};

export default Videos;

export const getStaticProps = async () => {
  try {
    await connectMongo();
    // get data (objects) in an array
    const data = await VideoData.find();
    let videoData = await JSON.parse(JSON.stringify(data));

    // sort the data items by year.
    videoData = await videoData.sort((a, b) => Number(b.year) - Number(a.year));

    return {
      props: {
        videoData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
