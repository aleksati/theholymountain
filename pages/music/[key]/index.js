import connectMongo from "../../../functions/connectMongo";
import LayoutPage from "../../../layouts/LayoutPage";
import MusicData from "../../../models/MusicData";
import Release from "../../../templates/Release";

const MusicItem = ({ item }) => {
  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | ${item.title}`,
        description: item.description,
      }}>
      <Release item={item} />
    </LayoutPage>
  );
};

export default MusicItem;

export const getStaticProps = async (context) => {
  try {
    await connectMongo();

    const url = context.params.key;
    let res = await MusicData.findOne({ key: url });
    let item = await JSON.parse(JSON.stringify(res));

    return {
      props: {
        item,
      },
    };
  } catch (error) {
    console.log(
      "Error while fetching static MusicData collection from db: ",
      error.message
    );
    // should not be needed because of the "fallback: false" mode
    return {
      notFound: true,
    };
  }
};

// in this context, must return an object with format:
// {paths : {params: {key: "ending", key: "toadof..", key: "finite.." "etc"}}}
export const getStaticPaths = async () => {
  await connectMongo();
  let res = await MusicData.find();
  let items = await JSON.parse(JSON.stringify(res));
  let keys = items.map((item) => item.key);

  let paths = keys.map((key) => ({ params: { key } }));

  return {
    paths,
    fallback: false,
  };
};
