import LayoutPage from "../../layouts/LayoutPage";
import SoMeBar from "../../components/SoMeBar";
import MyImage from "../../components/MyImage";
import VideoPlayer from "../../components/VideoPlayer";
import MusicReleaseArrows from "../../components/MusicReleaseArrows";
import { RELEASE_ITEMS } from "../../config/index.js";

const { title, year, category, description, tracklist, credits, someObject, videoUrl, videoTitle } =
  RELEASE_ITEMS.endingitalltonightremix;

const Music = () => {
  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | ${title}`,
      }}>
      <div className="flex flex-col space-y-12 md:space-y-14">
        <div className="relative flex min-h-[calc(100svh-10rem)] flex-col gap-6 md:min-h-0 md:grid md:grid-cols-2 md:items-stretch">
          <div className="relative md:static">
            <MusicReleaseArrows />
            <MyImage alt={`${title} album cover`} src="endingitalltonight-remix.jpg" layout="responsive" />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="grid flex-1 grid-rows-[1fr_auto] md:flex md:flex-col md:justify-center">
              <div className="flex flex-col justify-center space-y-4 md:items-center">
                <h1 className="text-size-header md:text-size-header-big leading-none text-center">{title}</h1>
                <h3 className="text-size-regular text-center">
                  The Holy Mountain • {year} • {category}
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
          <VideoPlayer url={videoUrl} title={videoTitle} />
        </div>
      </div>
    </LayoutPage>
  );
};

export default Music;

export const getStaticProps = async () => ({
  props: {},
});
