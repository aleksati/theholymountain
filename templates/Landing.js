import MyImage from "../components/MyImage";
import SoMeBar from "../components/SoMeBar";
import { SHOP_ITEMS } from "../config";
import Grid from "../components/Grid";
import ShopCard from "../components/ShopCard";

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
];

const theymerch = SHOP_ITEMS.filter(({ key }) => key === "theytote" || key === "theyshirt");

const releases = SHOP_ITEMS.filter(({ key }) => key != "theytote" && key !== "theyshirt");

const Landing = () => (
  <div className="flex flex-col pt-0 md:pt-6 space-y-12 md:space-y-14">
    <div className="flex min-h-[calc(100dvh-10rem)] flex-col gap-6 md:min-h-0 md:grid md:grid-cols-2 md:items-stretch md:gap-8">
        <MyImage alt="Ending It All Tonight (Remix) cover" src="endingitalltonight-remix.jpg" layout="responsive" />
        <div className="flex flex-1 flex-col">
          <div className="grid flex-1 grid-rows-[1fr_auto] md:flex md:flex-col md:justify-center">
            <div className="flex flex-col justify-center space-y-6 md:items-center">
              <div className="space-y-2">
                <h1 className="text-size-header md:text-size-header-big leading-none">
                  ENDING IT ALL TONIGHT (REMIX)
                </h1>
                <h3 className="text-size-regular">EP • 2025</h3>
              </div>
              <div className="space-y-4">
                <p className="text-size-regular">
                  A special EP release including five remixes from our 2019 electronic album ENDING IT ALL TONIGHT,
                  remixed and given new life by us.
                </p>
                <p className="text-size-regular">
                  The release also features an original music video for the track &quot;Consumer Confidence is Back&quot;. Avaliable on all streaming platforms.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <SoMeBar someObject={someObject} iconSize="text-3xl md:text-4xl" />
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
    <div className="space-y-4">
      <h1 className="text-size-header md:text-size-header-big leading-none">THEY ARE ASLEEP MERCH</h1>
      <Grid smallScreenColumns={2} className="mt-2 gap-y-4">
        {theymerch.map((shopItem) => (
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
    <div>
      <h1 className="text-size-header md:text-size-header-big leading-none">RELEASES</h1>
      <Grid smallScreenColumns={2} className="mt-2 gap-y-4">
        {releases.map((shopItem) => (
          <ShopCard key={shopItem.key} shopItem={shopItem} />
        ))}
      </Grid>
    </div>
  </div>
);

export default Landing;
