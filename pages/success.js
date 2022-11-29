import successGif from "../public/img/error.gif";
import ClientOnly from "../components/ClientOnly";
import LayoutPage from "../layouts/LayoutPage";
import Spinner from "../components/Spinner";
import { SITE_DOMAIN } from "../config";
import { useRouter } from "next/router";
import Meta from "../components/Meta";
import Nav from "../templates/Nav";
import Image from "next/image";
import useSWR from "swr";

// from:
// https://www.youtube.com/watch?v=0T8PcO6WDnE
// arrived at after customer completes a payment in the Shop.

const success = () => {
  const router = useRouter();
  const { session_id } = router.query;

  const { data, error } = useSWR(
    `${SITE_DOMAIN}/api/shop/${session_id}`,
    (url) => fetch(url).then((res) => res.json())
  );

  return (
    <LayoutPage>
      <Meta
        title={`The Holy Mountain | Success!`}
        keywords="band, music, norway, artist, avant-garde, pop, minimalism, dreampop, electropop, akkordeon, accordion, synthesizer, synthwave, drums, roland juno, vocals, The Holy Mountain, The Holy Mountain discography, The Holy Mountain shows, The Holy Mountain albums, The Holy Mountain merch, The Holy Mountain video, The Holy Mountain music, The Holy Mountain band, The Holy Mountain, Accordion band, Accordion trio, trekkspillmusikk"
        description="The official website of The Holy Mountain trio"
        url={`${SITE_DOMAIN}/success`}
      />
      <ClientOnly>
        <Nav showBackButton={true} showMenu={true} />
        <div className="grid grid-cols-1 min-h-screen p-4 gap-4">
          <div></div>
          {error ? (
            <div>
              <div>
                <h1 className="text-size-header md:text-size-header-big leading-8 font-bold">
                  Oh, no!
                </h1>
              </div>
              <div>
                <p>Something went wrong..</p>
              </div>
            </div>
          ) : !data ? (
            <div>
              <Spinner />
            </div>
          ) : (
            <div className="space-y-4 justify-center text-center items-center">
              <div>
                <h1 className="text-size-header md:text-size-header-big leading-8 font-bold">
                  Thank you for your order!
                </h1>
              </div>
              <div>
                <p>
                  You will soon receive a confirmation email with a receipt.
                </p>
              </div>
              <div>
                <Image src={successGif} unoptimized={true} alt="success" />
              </div>
            </div>
          )}
          <div></div>
        </div>
      </ClientOnly>
    </LayoutPage>
  );
};

export default success;

// I think I need to define this because I have static in the other pages.
export async function getServerSideProps(context) {
  return { props: {} };
}
