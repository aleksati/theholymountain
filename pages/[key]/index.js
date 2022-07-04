import LayoutPage from "../../components/LayoutPage";
import { server } from "../../config";
import Link from "next/link";

const release = ({ releaseData }) => {
  return (
    <LayoutPage>
      <h1 className="text-size-header text-primary-light dark:text-primary-dark">
        {releaseData.title}
      </h1>
      <h1 className="text-size-regular text-primary-light dark:text-primary-dark">
        {releaseData.text}
      </h1>
      <br />
      <Link href="/#music" className="text-size-small">
        <a>Go back!</a>
      </Link>
    </LayoutPage>
  );
};

// fetch individual banddata we need based on the url
export const getStaticProps = async context => {
  const res = await fetch(`${server}/api/release/${context.params.key}`);
  const releaseData = await res.json();

  return {
    props: {
      releaseData,
    },
  };
};

// in this context, must return an object with format:
// {paths : {params: {id: "1", id: "2", id: "3" "etc"}}}
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/release`);
  const releaseData = await res.json();
  const keys = releaseData.map(article => article.key);
  const paths = keys.map(key => ({ params: { key: key.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default release;
