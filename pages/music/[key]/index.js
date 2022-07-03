import LayoutPage from "../../../components/LayoutPage";
import { server } from "../../../config";
import Link from "next/link";

const music = ({ musicData }) => {
  return (
    <LayoutPage>
      <h1 className="text-size-header text-primary-light dark:text-primary-dark">
        {musicData.title}
      </h1>
      <h1 className="text-size-regular text-primary-light dark:text-primary-dark">
        {musicData.text}
      </h1>
      <br />
      <Link href="/" className="text-size-small">
        Go back!
      </Link>
    </LayoutPage>
  );
};

// fetch individual banddata we need based on the url
export const getStaticProps = async context => {
  const res = await fetch(`${server}/api/music/${context.params.key}`);
  const musicData = await res.json();

  return {
    props: {
      musicData,
    },
  };
};

// in this context, must return an object with format:
// {paths : {params: {id: "1", id: "2", id: "3" "etc"}}}
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/music`);
  const musicData = await res.json();
  const keys = musicData.map(article => article.key);
  const paths = keys.map(key => ({ params: { key: key.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default music;
