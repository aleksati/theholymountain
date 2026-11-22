import LayoutPage from "../../layouts/LayoutPage.js";
import SoMeBar from "../../components/SoMeBar.js";
import MyImage from "../../components/MyImage.js";
import VideoPlayer from "../../components/VideoPlayer.js";
import TextCard from "../../components/TextCard.js";
import GalleryGrid from "../../components/GalleryGrid.js";
import MusicReleaseArrows from "../../components/MusicReleaseArrows.js";
import Grid from "../../components/Grid.js";
import ShopCard from "../../components/ShopCard.js";
import { RELEASE_ITEMS } from "../../config/index.js";

const { title, year, category, description, tracklist, credits, someObject, videoUrl, shopItems, imgNames } =
  RELEASE_ITEMS.theyareasleep;

const Music = () => {
  return (
    <LayoutPage
      pageMeta={{
        title: `The Holy Mountain | ${title}`,
      }}>
      <div className="flex flex-col space-y-12 md:space-y-16">
        <div className="relative flex min-h-[calc(100svh-10rem)] flex-col gap-6 md:min-h-0 md:grid md:grid-cols-2 md:items-stretch">
          <div className="relative md:static">
            <MusicReleaseArrows />
            <MyImage alt="" src="theyareasleep.jpg" layout="responsive" />
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
          <VideoPlayer url={videoUrl} title={title} />
        </div>
        <div>
          <h1 className="text-size-header md:text-size-header-big leading-none">SHOP</h1>
          <Grid smallScreenColumns={2} className="mt-2 gap-y-4">
            {shopItems.map((shopItem) => (
              <ShopCard key={shopItem.key} shopItem={shopItem} />
            ))}
          </Grid>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-size-header md:text-size-header-big leading-none">REVIEWS</h1>
          <div className="grid text-size-small md:text-size-regular grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4">
            <TextCard>
              <p className="">
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
              <p>
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
              <p>
                «Det er lekent. Men det er fortsatt mystisk og det høres ut som en rød solnedgang inne på en mørk
                discofest. Hvis det er en lyd.»
              </p>
              -{" "}
              <a className="text-blue-400" href="https://www.universitas.no/synth-pop-uten-spenning/376230">
                Universitas (NO)
              </a>
            </TextCard>
            <TextCard>
              <p>
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
          <p>Photos by Katinka Hustad</p>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Music;

export const getStaticProps = async () => ({
  props: {},
});
