import ClientOnly from "../components/ClientOnly";
import LayoutPage from "../layouts/LayoutPage";
import Loading from "../components/Loading";
import { SITE_DOMAIN } from "../config";
import { useRouter } from "next/router";
import useSWR from "swr";

// from:
// https://www.youtube.com/watch?v=0T8PcO6WDnE
// arrived at after customer completes a payment in the Shop.

const pageMeta = {
  title: "The Holy Mountain | Success!",
  description: "The official website of The Holy Mountain trio",
  url: `${SITE_DOMAIN}/success`,
};

const Success = () => {
  const router = useRouter();
  const { session_id } = router.query;

  const { data, error } = useSWR(
    `${SITE_DOMAIN}/api/shop/${session_id}`,
    (url) => fetch(url).then((res) => res.json())
  );

  return (
    <LayoutPage pageMeta={pageMeta}>
      <ClientOnly className="grid grid-cols-1 min-h-screen p-4 gap-4 text-center">
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
            <Loading />
          </div>
        ) : (
          <div className="space-y-4 justify-center text-center items-center">
            <div>
              <h1 className="text-size-header md:text-size-header-big leading-8 font-bold">
                Thank you for your order!
              </h1>
            </div>
            <div>
              <p>You will soon receive a confirmation email with a receipt.</p>
            </div>
            <p>Success!!</p>
          </div>
        )}
        <div></div>
      </ClientOnly>
    </LayoutPage>
  );
};

export default Success;

// I think I need to define this because I have static in the other pages.
export async function getServerSideProps(context) {
  return { props: {} };
}
