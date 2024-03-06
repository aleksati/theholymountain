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
      {error ? (
        <div className="pt-4">
          <p>Oh, no!</p>
          <p>Something went wrong..</p>
        </div>
      ) : !data ? (
        <div className="pt-4">
          <Loading />
        </div>
      ) : (
        <div>
          <p className="pt-4">Thank you for your order!</p>
          <p>You will soon receive a confirmation email with a receipt.</p>
        </div>
      )}
    </LayoutPage>
  );
};

export default Success;

// I think I need to define this because I have static in the other pages.
export async function getServerSideProps(context) {
  return { props: {} };
}
