import LayoutPage from "../../../layouts/LayoutPage";
import SoMeBar from "../../../components/SoMeBar";
import MyImage from "../../../components/MyImage";
import VideoPlayer from "../../../components/VideoPlayer";
import MusicReleaseArrows from "../../../components/MusicReleaseArrows";
import GalleryGrid from "../../../components/GalleryGrid";

const title = "TOAD OF LIGHT";
const year = "2018";
const category = "Album";
const description =
  "Toad of Light is our debut studio album, released on Shhpuma records in 2018 on LP and digital. The release is inspired by dystopian sci-fi visions and cult aesthetics, with cover design by the legendary comic book artist Philippe Druillet, and a unique music video by Norwegian filmmaker Marius Rolfsvåg. Available on 12-inch vinyl from our online store.";
const tracklist = [
  {
    track: "Adoration of the Moon",
    number: "01.",
    length: "10:54",
  },
  {
    track: "They Live",
    number: "02.",
    length: "07:39",
  },
  {
    track: "Celestial City",
    number: "03.",
    length: "07:24",
  },
  {
    track: "Night Toad Palace",
    number: "04.",
    length: "13:20",
  },
];
const credits = [
  "Produced by The Holy Mountain",
  "Recorded and Mixed by Dag Erik Johansen at Athletic Sound Studios, Halden",
  "Mastered by Alex Wharton at Abbey Road Studios, London",
];
const someObject = [
  {
    key: "spotify",
    url: "https://open.spotify.com/album/37bf6gSuQLwPUveg4acX3A",
  },
  {
    key: "tidal",
    url: "https://tidal.com/browse/album/323623936",
  },
  {
    key: "applemusic",
    url: "https://music.apple.com/us/album/toad-of-light/1723828718",
  },
  {
    key: "bandcamp",
    url: "https://theholymountain.bandcamp.com/album/toad-of-light",
  },
];
const videos = [
  {
    title: "They Live",
    url: "https://www.youtube.com/embed/7qeJYBkaC6E",
  },
  {
    title: "Celestial City",
    url: "https://www.youtube.com/embed/EcDxWOoWMzk",
  },
];
const imgNames = ["2-3.jpg", "2-4.jpg", "2-5.jpg", "2-6.JPG", "2-1.jpg", "2-7.jpg", "2-8.jpg", "2-9.jpg"];

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
            <MyImage alt={`${title} album cover`} src="toadoflight.jpg" layout="responsive" />
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
