import LayoutPage from "../../layouts/LayoutPage";
import SoMeBar from "../../components/SoMeBar";
import MyImage from "../../components/MyImage";
import VideoPlayer from "../../components/VideoPlayer";
import MusicReleaseArrows from "../../components/MusicReleaseArrows";

const title = "ENDING IT ALL TONIGHT (REMIX)";
const year = "2025";
const category = "EP";
const description =
"A special release including five remixes from our 2019 electronic album ENDING IT ALL TONIGHT, remixed and given new life by us. The release also features man original music video for the track 'Consumer Confidence is Back'.";

const tracklist = [
  {
    track: "Consumer Confidence is Back (2025 Remix)",
    number: "01.",
    length: "04:29",
  },
  {
    track: "Who Goes There (2025 Remix)",
    number: "02.",
    length: "05:37",
  },
  {
    track: "And Hank Mardukas (2025 Remix)",
    number: "03.",
    length: "05:08",
  },
  {
    track: "Tokyo 1994 (2025 Remix)",
    number: "04.",
    length: "02:28",
  },
  {
    track: "Night Striker (2025 Remix)",
    number: "05.",
    length: "04:31",
  },
];
const credits = [
  "Produced by The Holy Mountain",
  "Mastered by Espen Høydalsvik at Oslo Fuzz",
];
const someObject = [
  {
    key: "spotify",
    url: "spotify:album:1uxHx2u7rCbMeabx4sbmKv",
  },
  {
    key: "bandcamp",
    url: "https://theholymountain.bandcamp.com/album/ending-it-all-tonight-remix",
  },
  {
    key: "applemusic",
    url:"https://music.apple.com/us/album/ending-it-all-tonight-remix-2025-remix-ep/1841643188"
  }
];
const videoUrl = "https://www.youtube.com/embed/ZWsFN8QLsRg?si=yslIuTScwW8Q3Adm";


const Music = () => {
  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | ${title}`,
      }}>
      <div className="flex flex-col space-y-12 md:space-y-14">
        <div className="relative flex min-h-[calc(100dvh-10rem)] flex-col gap-6 md:min-h-0 md:grid md:grid-cols-2 md:items-stretch">
          <div className="relative md:static">
            <MusicReleaseArrows />
            <MyImage
              alt={`${title} album cover`}
              src="endingitalltonight-remix.jpg"
              layout="responsive"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="grid flex-1 grid-rows-[1fr_auto] md:flex md:flex-col md:justify-center">
              <div className="flex flex-col justify-center space-y-4 md:items-center">
                <h1 className="text-size-header md:text-size-header-big leading-none text-center">{title}</h1>
                <h3 className="text-size-regular text-center">
                  The Holy Mountain • {category} • {year}
                </h3>
              </div>
              <div className="mx-auto flex space-x-2 pt-6">
                <SoMeBar someObject={someObject} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-size-header md:text-size-header-big leading-none">TRACKLIST</h1>
          <ol className="text-size-title space-y-4 pt-6">
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
          <h2 className="text-size-header md:text-size-header leading-none">CREDITS</h2>
          <p className="text-size-regular">{description}</p>
          <div className="text-size-regular space-y-1">
            {credits.map((credit) => (
              <p key={credit}>{credit}</p>
            ))}
          </div>
        </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-size-header md:text-size-header-big leading-none">VIDEOS</h1>
            <VideoPlayer url={videoUrl} title="Consumer Confidence is Back (2025 Remix) (Official Music Video)" />
          </div>
      </div>
    </LayoutPage>
  );
};

export default Music;

export const getStaticProps = async () => ({
  props: {},
});
