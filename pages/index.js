import Front from "../sections/Front";
import Discography from "../sections/Discography";
import Nav from "../sections/Nav";
import { server } from "../config";

// TODO
// * Add tiny x on popupCards
// * Fix navbar stopping at footer. Also, make the issues button on right side
// * Add videos page

export default function Home({ releaseData }) {
  return (
    <>
      <div className="divide-y divide-gray-300 dark:divide-gray-600">
        <Front />
        <Discography releaseData={releaseData} />
      </div>
      <Nav />
      {/* For the like counter: Use SWR data fetching for client-side data fetching. Should call an API endpoint that: 
      - Collects and hashes the ip
      - Checks the database for the same user. 
      - if not present, add it. 
      - send the length as success response, (then increment 1 in browser).
      - or send back negative response. do not increment. 
    */}
    </>
  );
}

// SSR just to hydrate with release info AND current likes.

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/release`);
  const releaseData = await res.json();

  return {
    props: {
      releaseData,
    },
  };
};
