import Discography from "../sections/Discography";
import Front from "../sections/Front";
import { server } from "../config";
import Videos from "../sections/Videos";

// TODO
// * custom slideshow indicators

export default function Home({ releaseData, videoData }) {
  return (
    <div className="divide-y divide-gray-300 dark:divide-gray-600">
      <Front />
      <Discography releaseData={releaseData} />
      <Videos videoData={videoData} />
      {/* For the like counter: Use SWR data fetching for client-side data fetching. Should call an API endpoint that: 
        - Collects and hashes the ip
        - Checks the database for the same user. 
        - if not present, add it. 
        - send the length as success response, (then increment 1 in browser).
        - or send back negative response. do not increment. 
      */}
    </div>
  );
}

// Change to SSR just to hydrate with release info AND current likes.

export const getStaticProps = async () => {
  const relRes = await fetch(`${server}/api/release`);
  const vidRes = await fetch(`${server}/api/video`);
  const releaseData = await relRes.json();
  const videoData = await vidRes.json();

  return {
    props: {
      releaseData,
      videoData,
    },
  };
};
