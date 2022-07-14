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
    "band, music, norway, artist, avant-garde, minimalism, dream pop, akkordeon, accordion, synthesizer, synthwave, drums, vocals, The Holy Mountain discography, The Holy Mountain shows, The Holy Mountain albums, The Holy Mountain merch, The Holy Mountain video, The Holy Mountain music, The Holy Mountain band, The Holy Mountain, Accordion band, Accordion trio, trekkspillmusikk",
  description:
    "An avant-garde pop group from Norway with accordion, synthesizer, drums, and vocals. Our members are Andreas Angell, Aleksander Tidemann and Catharina Janner Røed.",
  url: `${SITE_DOMAIN}`,
};

export default Meta;
