import musicData from "../../lib/musicData";
import MusicPage from "../../sections/MusicPage";

export default function handler({ item }) {
  const meta = {
    title: `The Holy Mountain | ${item.title}`,
  };

  return <MusicPage meta={meta} item={item} />;
}

export const getStaticProps = async context => {
  const key = context.params.key;
  const filteredMusicData = musicData.filter(music => music.key === key);
  const item = filteredMusicData[0];

  return {
    props: {
      item,
    },
  };
};

// in this context, must return an object with format:
// {paths : {params: {key: "ending", key: "toadof..", key: "finite.." "etc"}}}
export const getStaticPaths = async () => {
  const filteredMusicData = musicData.sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  const keys = filteredMusicData.map(music => music.key);
  const paths = keys.map(key => ({ params: { key: key.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
