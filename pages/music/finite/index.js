import LayoutPage from "../../../layouts/LayoutPage";
import SoMeBar from "../../../components/SoMeBar";
import MyImage from "../../../components/MyImage";
import VideoPlayer from "../../../components/VideoPlayer";
import MusicReleaseArrows from "../../../components/MusicReleaseArrows";

const title = "FINITE";
const year = "2016";
const category = "Soundtrack";
const description =
  "FINITE is a short film by director Marius Rolfsvåg about loneliness in a post-apocalyptic, dystopian future. The movie won Best Sound at Amandus 2017 and was nominated for Best New Nordic Voice at the 2016 Nordisk Panorama Film Festival. The soundtrack features ten original compositions for accordion, synthesizers and electronics. Available on limited-edition cassettes from our online store.";
const tracklist = [
  {
    track: "I",
    number: "01.",
    length: "02:18",
  },
  {
    track: "II",
    number: "02.",
    length: "02:12",
  },
  {
    track: "III",
    number: "03.",
    length: "02:27",
  },
  {
    track: "IV",
    number: "04.",
    length: "03:24",
  },
  {
    track: "V",
    number: "05.",
    length: "02:23",
  },
  {
    track: "VI (Ich ruf zu dir)",
    number: "06.",
    length: "04:07",
  },
  {
    track: "VII",
    number: "07.",
    length: "03:18",
  },
  {
    track: "VIII",
    number: "08.",
    length: "01:42",
  },
  {
    track: "IX",
    number: "09.",
    length: "03:05",
  },
  {
    track: "X",
    number: "10.",
    length: "03:12",
  },
];
const credits = ["Produced by The Holy Mountain"];
const someObject = [
  {
    key: "bandcamp",
    url: "https://theholymountain.bandcamp.com/album/finite",
  },
];
const videos = [
  {
    title: "FINITE",
    url: "https://www.youtube.com/embed/2XQz9M5yqac?si=yByn-vu38l9P6kdI",
  },
];

const Music = () => {
  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | ${title}`,
      }}>
      <div className="flex flex-col space-y-12 md:space-y-14">
        <div className="relative grid grid-cols-2 gap-6 items-center">
          <div className="relative col-span-2 md:col-span-1 md:static rounded-md border border-secondary-skin-dark">
            <MusicReleaseArrows />
            <MyImage alt={`${title} cover`} src="finite.jpg" layout="responsive" />
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
      </div>
    </LayoutPage>
  );
};

export default Music;

export const getStaticProps = async () => ({
  props: {},
});
