import connectMongo from "../../functions/connectMongo";
import PageRelease from "../../templates/PageRelease";
import LayoutPage from "../../layouts/LayoutPage";
import MusicData from "../../models/MusicData";
import { SITE_DOMAIN } from "../../config";

const Release = ({ item }) => {
  const pageMeta = {
    title: `The Holy Mountain | ${item.title}`,
    keywords:
      "band, music, norway, artist, avant-garde, pop, minimalism, dreampop, electropop, akkordeon, accordion, synthesizer, synthwave, drums, roland juno, vocals, The Holy Mountain, The Holy Mountain discography, The Holy Mountain shows, The Holy Mountain albums, The Holy Mountain merch, The Holy Mountain video, The Holy Mountain music, The Holy Mountain band, The Holy Mountain, Accordion band, Accordion trio, trekkspillmusikk",
    description: item.description,
    url: `${SITE_DOMAIN}/${item.key}`,
  };
  return (
    <LayoutPage pageMeta={pageMeta} showBackButton={true} showMenu={true}>
      {() => <PageRelease item={item} />}
    </LayoutPage>
  );
};

export default Release;

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
