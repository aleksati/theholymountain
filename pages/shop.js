import connectMongo from "../functions/connectMongo";
import LayoutPage from "../layouts/LayoutPage";
import MusicData from "../models/MusicData";
import Grid from "../components/Grid";
import ShopNew from "../components/ShopNew";

const shop = ({ data }) => {
  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | shop`,
      }}>
      <ShopNew musicData={data} />
      {/* <Grid gridCols={3}>
        {data.map((item) => (
          <p>{item.title}</p>
        ))}
      </Grid> */}
    </LayoutPage>
  );
};

export default shop;

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
