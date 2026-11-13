import LayoutPage from "../../../layouts/LayoutPage";
import SoMeBar from "../../../components/SoMeBar";
import { useEffect } from "react";
import MyImage from "../../../components/MyImage";
import VideoPlayer from "../../../components/VideoPlayer";
import TextCard from "../../../components/TextCard";
import GalleryGrid from "../../../components/GalleryGrid.js";
import MusicReleaseArrows from "../../../components/MusicReleaseArrows";

const title = "THEY ARE ASLEEP";
const year = "2024";
const category = "Album";
const description =
  "They Are Asleep is all about having a party in hell, with lyrical themes about collective ignorance, death, and the decay of nature, and music reminiscent of Y2K techno, synth-pop and sci-fi horror. Join us where tensions are high and the darkness is bright. The release features logo design by Bjørn Erik Nyhuus, a cover image from Katinka Hustad and a music video by Johannes Frank Fuglehaug.";
const tracklist = [
  {
    track: "Never Know",
    number: "01.",
    length: "03:45",
  },
  {
    track: "Searing Light",
    number: "02.",
    length: "03:52",
  },
  {
    track: "Remains Unsaid",
    number: "03.",
    length: "04:39",
  },
  {
    track: "The Third Place",
    number: "04.",
    length: "03:59",
  },
  {
    track: "Nature. A Sermon",
    number: "05.",
    length: "03:23",
  },
];
const credits = [
  "Produced by The Holy Mountain",
  "Recorded and Mixed by Marcus Forsgren",
  "Mastered by Espen Høydalsvik",
];
const someObject = [
  {
    key: "spotify",
    url: "https://open.spotify.com/album/0JExCWKqyzrifd7TX4m13J?si=HJRvUhK1QkCL0OaiPkkPnA",
  },
  {
    key: "tidal",
    url: "https://tidal.com/browse/album/351455415",
  },
  {
    key: "applemusic",
    url: "https://music.apple.com/us/album/they-are-asleep-ep/1735525786",
  },
  {
    key: "bandcamp",
    url: "https://theholymountain.bandcamp.com/album/they-are-asleep",
  },
];
const videoUrl = "https://www.youtube.com/embed/ZWsFN8QLsRg?si=lLXH4t_6_yTliipk";
const imgNames = ["3-1-15.jpg", "3-1.jpg", "3-1-11.jpg", "3-7.jpg", "3-1-12.jpg", "3-1-13.jpg"];

const Music = () => {
  // force scroll to top.
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [200]);
  }, []);

  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | ${title}`,
      }}>
      <div className="flex flex-col space-y-12 md:space-y-16">
        <div className="relative grid grid-cols-2 gap-6 items-center">
          <div className="relative col-span-2 md:col-span-1 md:static">
            <MusicReleaseArrows />
            <MyImage alt="" src="theyareasleep.jpg" layout="responsive" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col space-y-4 justify-center md:items-center">
              <h1 className="text-size-header md:text-size-header-big leading-none text-center">{title}</h1>
              <h3 className="text-size-regular text-center">
                {category} • {year}
              </h3>
              <div className="flex space-x-2 self-center">
                <SoMeBar someObject={someObject} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-size-header md:text-size-header-big leading-none">TRACKLIST</h1>
          <ol className="text-size-title space-y-4">
            {tracklist.map((track) => (
              <li
                key={track.number}
                className="flex items-center border-b border-secondary-skin-dark pb-2 text-size-regular">
                <span className="text-secondary pr-2">{track.number}</span>
                <span>{track.track}</span>
                <span className="ml-auto pl-4">{track.length}</span>
              </li>
            ))}
          </ol>
        </div>
        <TextCard>
          <div className="flex flex-col space-y-4">
            <h2 className="text-size-title md:text-size-header leading-none">CREDITS</h2>
            <p className="text-size-regular">{description}</p>
            <div className="text-size-regular space-y-1">
              {credits.map((credit) => (
                <p key={credit}>{credit}</p>
              ))}
            </div>
          </div>
        </TextCard>
        <div className="flex flex-col space-y-4">
          <h1 className="text-size-header md:text-size-header-big leading-none">VIDEOS</h1>
          <VideoPlayer url={videoUrl} title={title} />
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-size-header md:text-size-header-big leading-none">REVIEWS</h1>
          <div className="grid text-size-regular grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4">
            <TextCard>
              <p className="p-2">
                «Dark yet catchy synth pop, an immersive release that transports listeners to a world where the line
                between heaven and hell is blurred.”
              </p>
              -{" "}
              <a
                className="text-blue-400"
                href="https://plasticmag.co.uk/2024/04/interview-the-holy-mountain-releases-new-ep/0">
                Plastic Mag (UK)
              </a>
            </TextCard>
            <TextCard>
              <p className="p-2">
                «På They Are Asleep hører vi kritikerroste låter omtalt av amerikanske Melomani som “synth-pop
                brilliance” og av britiske Plastic Magazine som “a superb showcase of the trio&apos;s creativity and
                ability to craft hook-filled music”.
              </p>
              -{" "}
              <a
                className="text-blue-400"
                href="https://eternal-terror.com/2024/04/19/the-holy-mountain-slipper-nytt-ep">
                Eternal Terror (SVE)
              </a>
            </TextCard>
            {/* <div className="bg-secondary-dark p-2">
              <p className="p-2">
                «Fans of dark, experimental music can sink their teeth into the intimate, atmospheric music here, while
                synth-pop music fans will find a new favorite band in The Holy Mountain»
              </p>
              -{" "}
              <a
                className="text-blue-400"
                href="https://cultartes.com/the-holy-mountain-digs-into-your-subconscious-with-its-synth-pop-perfection/">
                Cultartes (ROM)
              </a>
            </div> */}
            <TextCard>
              <p className="p-2">
                «Det er lekent. Men det er fortsatt mystisk og det høres ut som en rød solnedgang inne på en mørk
                discofest. Hvis det er en lyd.»
              </p>
              -{" "}
              <a className="text-blue-400" href="https://www.universitas.no/synth-pop-uten-spenning/376230">
                Universitas (NO)
              </a>
            </TextCard>
            <TextCard>
              <p className="p-2">
                {" "}
                «Although walking in the light can be both overwhelming and inspiring, it can also entail death.
                “Searing Light” exists in this tense area where light might imply darkness and darkness can signify
                light.»
              </p>
              - Exclusive interview with{" "}
              <a
                className="text-blue-400"
                href="https://plasticmag.co.uk/2024/04/interview-the-holy-mountain-releases-new-ep/0">
                Illustrate Mag (UK)
              </a>{" "}
            </TextCard>
          </div>
        </div>
        <div>
          <h1 className="text-size-header md:text-size-header-big leading-none">GALLERY</h1>
          <GalleryGrid imgNames={imgNames} />
          {/* <Grid>
            <MyImage
              key={"gallery/3-1-15.jpg"}
              src={"gallery/3-1-15.jpg"}
              layout="responsive"
              objectFit="contain"
              isExpandable={true}
            />
            <MyImage
              key={"gallery/3-1.jpg"}
              src={"gallery/3-1.jpg"}
              layout="responsive"
              objectFit="contain"
              isExpandable={true}
            />
            <MyImage
              key={"gallery/3-1-11.jpg"}
              src={"gallery/3-1-11.jpg"}
              layout="responsive"
              objectFit="contain"
              isExpandable={true}
            />
            <MyImage
              src={"gallery/3-7.jpg"}
              key={"gallery/3-7.jpg"}
              layout="responsive"
              objectFit="contain"
              isExpandable={true}
            />
            <MyImage
              key={"gallery/3-1-12.jpg"}
              src={"gallery/3-1-12.jpg"}
              layout="responsive"
              objectFit="contain"
              isExpandable={true}
            />
            <MyImage
              key={"gallery/3-1-13.jpg"}
              src={"gallery/3-1-13.jpg"}
              layout="responsive"
              objectFit="contain"
              isExpandable={true}
            />
          </Grid> */}
          <p>Foto by Katinka Hustad</p>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Music;

export const getStaticProps = async () => ({
  props: {},
});
