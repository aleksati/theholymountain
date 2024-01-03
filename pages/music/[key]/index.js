import connectMongo from "../../../functions/connectMongo";
import ReleaseAudio from "../../../components/ReleaseAudio";
import LikesCounter from "../../../components/LikesCounter";
import LayoutPage from "../../../layouts/LayoutPage";
import MusicData from "../../../models/MusicData";
import SoMeBar from "../../../components/SoMeBar";
import { useEffect } from "react";

const Release = ({ item }) => {
  // force scroll to top.
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [200]);
  }, []);

  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | ${item.title}`,
      }}>
      <div
        className="flex flex-col p-4 space-y-4"
        aria-label={`${item.title} page`}>
        <div>
          <ReleaseAudio
            spotifyurl={item.spotifyurl}
            previewurl={item.previewurl}
          />
        </div>
        <div className="flex items-center space-x-4">
          <LikesCounter releaseKey={item.key} />
          <SoMeBar exclude={["spotify"]} someObject={item.some} />
        </div>
        <div className="text-secondary">
          {item.credits.map((credit, index) => (
            <p key={index}>{credit}</p>
          ))}
        </div>
        <div>
          <p>{item.description}</p>
        </div>
      </div>
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
