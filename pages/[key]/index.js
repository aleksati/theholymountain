import PageRelease from "../../templates/PageRelease";
import connectMongo from "../../functions/connectMongo";
import MusicData from "../../models/MusicData";
import ButtonIconAndText from "../../components/ButtonIconAndText";
import LayoutApp from "../../layouts/LayoutApp";
import Link from "next/link";

export default function handler({ item }) {
  const meta = {
    title: `The Holy Mountain | ${item.title}`,
  };

  return (
    <LayoutApp appMeta={meta}>
      <div className="flex pt-4 pl-4 place-content-start">
        <Link href="/#music" passHref>
          <ButtonIconAndText iconId="prevArrow" />
        </Link>
      </div>
      <PageRelease item={item} />
    </LayoutApp>
  );
}

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
      "Error while fetching static MusicData collection from db during build: ",
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
