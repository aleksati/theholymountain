import MyImage from "../components/MyImage";
import SoMeBar from "../components/SoMeBar";
import { RELEASE_ITEMS, SHOP_ITEMS } from "../config";
import Grid from "../components/Grid";
import ShopCard from "../components/ShopCard";
import ReleaseCard from "../components/ReleaseCard";
import GalleryGrid from "../components/GalleryGrid";
import Link from "next/link";

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
    url: "https://music.apple.com/us/album/ending-it-all-tonight-remix-2025-remix-ep/1841643188",
  },
  {
    key: "tidal",
    url: "https://tidal.com/album/462198538/u",
  },
];

const Landing = () => (
  <div className="flex flex-col space-y-16 md:space-y-24">
    <div className="flex flex-col space-y-8 ">
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:items-stretch md:gap-8">
        <Link href="/music/endingitalltonightremix">
          <div className="cursor-pointer">
            <MyImage alt="Ending It All Tonight (Remix) cover" src="endingitalltonight-remix.jpg" layout="responsive" />
          </div>
        </Link>
        <div className="flex flex-1 flex-col">
          <div className="md:flex md:flex-1 md:flex-col md:justify-center">
            <div className="flex flex-col justify-center space-y-4 md:items-center">
              <h1 className="text-size-header lg:text-size-header-big leading-none text-center">
                ENDING IT ALL TONIGHT (REMIX)
              </h1>
              <h3 className="text-size-regular text-center">New EP from The Holy Mountain</h3>
              <div className="space-y-4 text-center">
                <p className="text-size-regular">
                  Ending It All Tonight Remix is a special EP release including five remixes from our 2019 electronic
                  album ENDING IT ALL TONIGHT. All tracks are re-worked and given new life by us. The release also
                  features a new music video for the track &quot;Consumer Confidence is Back&quot;.
                </p>
              </div>
              <div className="mx-auto flex space-x-2 pt-2">
                <SoMeBar someObject={someObject} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          width="100%"
          alt={`Consumer Confidence is Back video`}
          height="440"
          src="https://www.youtube.com/embed/ZWsFN8QLsRg?si=yslIuTScwW8Q3Adm"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </div>
    <div className="space-y-4 pt-4">
      <h1 className="text-size-header md:text-size-header-big leading-none">THEY ARE ASLEEP MERCH</h1>
      <Grid smallScreenColumns={1} className="mt-2 gap-y-4">
        {SHOP_ITEMS.filter(({ key }) => ["theytote", "theyshirt"].includes(key)).map((shopItem) => (
          <ShopCard key={shopItem.key} shopItem={shopItem} />
        ))}
      </Grid>
      <div>
        <iframe
          width="100%"
          alt={`Searing Light YouTube video`}
          height="440"
          src={"https://www.youtube.com/embed/gAo2EbLAy7A?si=xfUBKsEpwb9tvUKN"}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </div>
    <div className="space-y-4  pt-4">
      <h1 className="text-size-header md:text-size-header-big leading-none">DISCOGRAPHY</h1>
      <Grid smallScreenColumns={2} className="mt-2 gap-y-4">
        {Object.entries(RELEASE_ITEMS).map(([releaseKey, release]) => (
          <ReleaseCard key={releaseKey} releaseKey={releaseKey} release={release} />
        ))}
      </Grid>
    </div>
    <div>
      <h1 className="text-size-header md:text-size-header-big leading-none pt-4">GALLERY</h1>
      <GalleryGrid imgNames={RELEASE_ITEMS.theyareasleep.imgNames} />
      <p className="text-size-regular">Photos by Katinka Hustad</p>
    </div>
  </div>
);

export default Landing;
