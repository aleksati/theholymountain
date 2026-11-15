import LayoutPage from "../../layouts/LayoutPage";
import SoMeBar from "../../components/SoMeBar";
import MyImage from "../../components/MyImage";
import VideoPlayer from "../../components/VideoPlayer";
import GalleryGrid from "../../components/GalleryGrid";
import MusicReleaseArrows from "../../components/MusicReleaseArrows";

const title = "THE DAWNS HERE ARE QUIET";
const year = "2023";
const category = "Album";
const description =
  "The Dawns Here Are Quiet is our second studio album, inspired by the poetry of Arseny Tarkovsky and nordic cinema. The release features original artwork by Katinka Hustad, cover design by Bjørn Erik Nyhus, and a unique music video by norwegian filmmaker Marius Rolfsvåg.";
const tracklist = [
  {
    track: "Awake",
    number: "01.",
    length: "05:26",
  },
  {
    track: "The Voice Is Calling Us",
    number: "02.",
    length: "03:25",
  },
  {
    track: "Estranged From Itself",
    number: "03.",
    length: "04:47",
  },
  {
    track: "There Is No Need To Fear The End",
    number: "04.",
    length: "05:36",
  },
  {
    track: "My Sight Now Blurs",
    number: "05.",
    length: "06:23",
  },
  {
    track: "Now Summer Is Gone",
    number: "06.",
    length: "03:48",
  },
  {
    track: "So I Shot Up, Adagio",
    number: "07.",
    length: "01:40",
  },
  {
    track: "The Dawns Here Are Quiet",
    number: "08.",
    length: "04:47",
  },
];
const credits = [
  "Produced by The Holy Mountain",
  "Mixed and Mastered by Peter Michelsen at Norwegian Sound, Mjøndalen",
  "Recorded by Dag E. Johansen, Audun Strype and David Michelsen",
];
const someObject = [
  {
    key: "spotify",
    url: "https://open.spotify.com/album/0Q1Z858XIAoJxgoR6T0y5O",
  },
  {
    key: "tidal",
    url: "https://tidal.com/album/379885188",
  },
  {
    key: "applemusic",
    url: "https://music.apple.com/us/album/the-dawns-here-are-quiet/1761780905",
  },
  {
    key: "bandcamp",
    url: "https://theholymountain.bandcamp.com/album/the-dawns-here-are-quiet",
  },
];
const videoUrl = "https://www.youtube.com/embed/QjaI0S1u_xo";
const imgNames = ["4-1.jpg", "4-2.jpg", "4-3.jpg", "4-4.jpg", "4-5.jpg", "4-6.jpg"]


const Music = () => {
  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | ${title}`,
      }}>
      <div className="flex flex-col space-y-12 md:space-y-16">
        <div className="relative flex min-h-[calc(100dvh-10rem)] flex-col gap-6 md:min-h-0 md:grid md:grid-cols-2 md:items-stretch">
          <div className="relative md:static">
            <MusicReleaseArrows />
            <MyImage
              alt={`${title} album cover`}
              src="thedawnsherearequiet.jpg"
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
            <VideoPlayer url={videoUrl} title="So I Shot Up, Adagio" />
          </div>
        <div>
          <h1 className="text-size-header md:text-size-header-big leading-none">GALLERY</h1>
          <GalleryGrid imgNames={imgNames}/>
          {/* <Grid>
            <MyImage
              key={"pressekit/4 foto katinka hustad album cover versjon.jpg"}
              src={"pressekit/4 foto katinka hustad album cover versjon.jpg"}
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
