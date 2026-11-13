import LayoutPage from "../../../layouts/LayoutPage";
import SoMeBar from "../../../components/SoMeBar";
import MyImage from "../../../components/MyImage";
import TextCard from "../../../components/TextCard";
import MusicReleaseArrows from "../../../components/MusicReleaseArrows";
import GalleryGrid from "../../../components/GalleryGrid";

const title = "THE HOLY MOUNTAIN (2024 MIX)";
const year = "2015";
const category = "EP";
const description =
  "The Holy Mountain is a journey through the underworld and towards the light. Our debut four-track EP features original artwork by Martin Marki and cover art by Bjørn Erik Nyhuus.";
const tracklist = [
  {
    track: "Eudaimonia (2024 Mix)",
    number: "01.",
    length: "03:28",
  },
  {
    track: "Introduction To The Underworld (2024 Mix)",
    number: "02.",
    length: "08:57",
  },
  {
    track: "Paradise Insomnia (2024 Mix)",
    number: "03.",
    length: "10:58",
  },
  {
    track: "Aspects of Vishnu (2024 Mix)",
    number: "04.",
    length: "09:02",
  },
];
const credits = [
  "Produced by The Holy Mountain",
  "Recorded by Emil Kraugerud",
  "Mixed by Marcus Forsgren at Paradiso Studios, Oslo",
  "Mastered by Espen Høydalsvik at Oslo Fuzz",
];
const someObject = [
  {
    key: "spotify",
    url: "https://open.spotify.com/album/38GE9XYHrA01eg8SIj1boR?si=1ivcwVlGQ7qkxdAO2kr0AA",
  },
  {
    key: "tidal",
    url: "https://listen.tidal.com/album/379634972",
  },
  {
    key: "applemusic",
    url: "https://music.apple.com/no/album/the-holy-mountain-2024-mix/1761705680",
  },
  {
    key: "bandcamp",
    url: "https://theholymountain.bandcamp.com/album/the-holy-mountain-2024-mix",
  },
];
const imgNames = [ "1-2.jpg", "1-1.jpg", "1-3.jpg", "1-5.jpg", "1-6.jpg"];

const Music = () => {
  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | ${title}`,
      }}>
      <div className="flex flex-col space-y-12 md:space-y-14">
        <div className="relative grid grid-cols-2 gap-6 items-center">
          <div className="relative col-span-2 md:col-span-1 md:static">
            <MusicReleaseArrows />
            <MyImage alt={`${title} cover`} src="theholymountain.jpg" layout="responsive" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col space-y-4 justify-center md:items-center">
              <h1 className="text-size-header md:text-size-header-big leading-none text-center">{title}</h1>
              <h3 className="text-size-regular text-center">
                The Holy Mountain • {category} • {year}
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
        <div>
          <h1 className="text-size-header md:text-size-header-big leading-none">GALLERY</h1>
          <GalleryGrid imgNames={imgNames} />
          <p>Foto by Martin Marki and Christian Lycke</p>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Music;

export const getStaticProps = async () => ({
  props: {},
});
