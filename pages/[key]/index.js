// import musicData from "../../lib/musicData";
import Release from "../../sections/Release";
import LayoutApp from "../../components/LayoutApp";
import ButtonToDiscography from "../../components/ButtonToDiscography";
import connectMongo from "../../utils/connectMongo";
import MusicData from "../../models/MusicData";

export default function handler({ item }) {
  const meta = {
    title: `The Holy Mountain | ${item.title}`,
  };

  return (
    <LayoutApp appMeta={meta}>
      <ButtonToDiscography />
      <Release item={item} />
    </LayoutApp>
  );
}

export const getStaticProps = async context => {
  try {
    await connectMongo();

    const url = context.params.key;
    let res = await MusicData.find({ key: url });
    let item = await JSON.parse(JSON.stringify(res[0]));

    return {
      props: {
        item,
      },
    };
  } catch (error) {
    console.log(error);
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
  let keys = items.map(item => item.key);

  let paths = keys.map(key => ({ params: { key } }));

  return {
    paths,
    fallback: false,
  };
};
