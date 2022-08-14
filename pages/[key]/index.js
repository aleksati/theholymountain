import musicData from "../../lib/musicData";
import MusicPage from "../../sections/MusicPage";
import AppLayout from "../../components/AppLayout";
import BackButton from "../../components/Music/BackButton";
import connectMongo from "../../utils/connectMongo";
import MusicData from "../../models/MusicData";

export default function handler({ item }) {
  const meta = {
    title: `The Holy Mountain | ${item.title}`,
  };

  return (
    <AppLayout>
      <BackButton />
      <MusicPage meta={meta} item={item} />
    </AppLayout>
  );
}

export const getStaticProps = async context => {
  const url = context.params.key;

  await connectMongo();
  let res = await MusicData.find({ key: url });
  let item = await JSON.parse(JSON.stringify(res[0]));

  return {
    props: {
      item,
    },
  };
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
