import Front from "../sections/Front";
import Discography from "../sections/Discography";
import Contact from "../sections/Contact";
import { server } from "../config";

export default function Home({ releaseData }) {
  return (
    <div className="divide-y divide-gray-300 dark:divide-gray-600">
      <Front />
      <Discography releaseData={releaseData} />
      <Contact />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/release`);
  const releaseData = await res.json();

  return {
    props: {
      releaseData,
    },
  };
};
