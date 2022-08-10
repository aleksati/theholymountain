import Head from "next/head";
import { SITE_DOMAIN } from "../config";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, inital-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "The Holy Mountain",
  keywords:
    "band, music, norway, artist, avant-garde, pop, minimalism, dreampop, electropop, akkordeon, accordion, synthesizer, synthwave, drums, roland juno, vocals, The Holy Mountain, The Holy Mountain discography, The Holy Mountain shows, The Holy Mountain albums, The Holy Mountain merch, The Holy Mountain video, The Holy Mountain music, The Holy Mountain band, The Holy Mountain, Accordion band, Accordion trio, trekkspillmusikk",
  description: "The official website of The Holy Mountain trio",
  url: `${SITE_DOMAIN}`,
};

export default Meta;
