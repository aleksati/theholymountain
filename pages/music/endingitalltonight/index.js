import LayoutPage from "../../../layouts/LayoutPage";
import SoMeBar from "../../../components/SoMeBar";
import MyImage from "../../../components/MyImage";
import VideoPlayer from "../../../components/VideoPlayer";
import MusicReleaseArrows from "../../../components/MusicReleaseArrows";
import GalleryGrid from "../../../components/GalleryGrid";

const title = "ENDING IT ALL TONIGHT";
const year = "2020";
const category = "Album";
const description =
  "Ending It All Tonight is a ten-part electronic album for synthesizers, drum machines and vocals, inspired by the joys and horrors of 80s pop culture. The release includes covers of Bach, Schumann, and Windows 98 with original artwork by AV Craig Gafoor. Available on limited edition cassettes from our online store.";
const tracklist = [
  {
    track: "98 Startup",
    number: "01.",
    length: "02:15",
  },
  {
    track: "Night Striker",
    number: "02.",
    length: "04:48",
  },
  {
    track: "Who Goes There?",
    number: "03.",
    length: "06:53",
  },
  {
    track: "California 1986",
    number: "04.",
    length: "03:02",
  },
  {
    track: "Dark Longing (Op.48)",
    number: "05.",
    length: "02:59",
  },
  {
    track: "Tokyo 1994",
    number: "06.",
    length: "02:12",
  },
  {
    track: "And Hank Mardukas",
    number: "07.",
    length: "05:31",
  },
  {
    track: "Sydney 2002",
    number: "08.",
    length: "02:02",
  },
  {
    track: "Preludium - Before the Storm (BWV 543)",
    number: "09.",
    length: "03:52",
  },
  {
    track: "Consumer Confidence is Back",
    number: "10.",
    length: "05:50",
  },
];
const credits = ["Produced by The Holy Mountain", "Mastered by Frode Berg"];
const someObject = [
  {
    key: "spotify",
    url: "https://open.spotify.com/album/7GtTvKVuS2bz64tQ9qg0De",
  },
  {
    key: "tidal",
    url: "https://tidal.com/browse/album/323623936",
  },
  {
    key: "eth",
    url: "https://opensea.io/collection/endingitalltonight",
  },
  {
    key: "applemusic",
    url: "https://music.apple.com/us/album/ending-it-all-tonight/1713207423",
  },
  {
    key: "bandcamp",
    url: "https://theholymountain.bandcamp.com/album/ending-it-all-tonight",
  },
];
const videos = [
  {
    title: "Tokyo 1994 (2025 Remix) (Official Music Video)",
    url: "https://www.youtube.com/embed/wAosHFd2l7Y?si=M9zOVXcwmPgFWUvp",
  },
  {
    title: "And Hank Mardukas (2025 Remix) (Official Music Video)",
    url: "https://www.youtube.com/embed/DMdIHFqXRBY?si=4PLnRVrH0F0ZmsC6",
  }
];
const imgNames = ["3-5.jpg", "3-2.jpg", "3-4.jpg", "3-4-1.jpg", "3-3.jpg", "3-1-10.jpg", "5-1.jpg"];

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
            <MyImage alt={`${title} album cover`} src="endingitalltonight.jpg" layout="responsive" />
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
        <div className="flex flex-col space-y-4 rounded-md border border-secondary-skin-dark p-4">
          <h2 className="text-size-title md:text-size-header leading-none">CREDITS</h2>
          <p className="text-size-regular">{description}</p>
          <div className="text-size-regular space-y-1">
            {credits.map((credit) => (
              <p key={credit}>{credit}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-size-header md:text-size-header-big leading-none">VIDEOS</h1>
          <div className="flex flex-col space-y-8">
            {videos.map(({ title, url }) => (
              <VideoPlayer key={title} url={url} title={title} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-size-header md:text-size-header-big leading-none">GALLERY</h1>
          <GalleryGrid imgNames={imgNames} />
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
