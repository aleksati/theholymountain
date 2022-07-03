import Cover from "../sections/Cover";
import Music from "../sections/Music";
import Contact from "../sections/Contact";
import { server } from "../config";

export default function Home({ musicData }) {
  return (
    <div className="divide-y divide-gray-300 dark:divide-gray-600">
      <Cover />
      <Music musicData={musicData} />
      <Contact />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/music`);
  const musicData = await res.json();

  return {
    props: {
      musicData,
    },
  };
};
