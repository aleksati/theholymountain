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
  <div className="flex flex-col space-y-12 md:space-y-14">
    <div>
      <iframe
        width="100%"
        alt={`Searing Light YouTube video`}
        height="440"
        src={"https://www.youtube.com/embed/gAo2EbLAy7A?si=xfUBKsEpwb9tvUKN"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
    <div className="flex flex-col space-y-6">
      <h1 className="text-size-header md:text-size-header-big leading-none">LATEST</h1>
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
        <MyImage alt="Ending It All Tonight (Remix) cover" src="endingitalltonight-remix.jpg" layout="responsive" />
        <div className="flex flex-col space-y-6">
          <div>
            <p className="text-size-title md:text-size-header font-bold leading-tight">ENDING IT ALL TONIGHT (REMIX)</p>
            <p className="text-size-regular MDtext-size-title leading-tight">EP 2025</p>
          </div>
          <p className="text-size-regular">
            A special EP release including five remixes from our 2019 electronic album ENDING IT ALL TONIGHT, remixed
            and given new life by us.
          </p>
          <p className="text-size-regular">
            The release also features an original music video for the track "Consumer Confidence is Back".
          </p>
          <p className="text-size-regular">Avaliable on all streaming platforms.</p>
          <SoMeBar someObject={someObject} iconSize="text-3xl md:text-4xl" />
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
    <div>
      <h1 className="text-size-header md:text-size-header-big leading-none">THEY ARE ASLEEP MERCH</h1>
      <Grid className="mt-2 gap-y-4">
        {theymerch.map((shopItem) => (
          <ShopCard key={shopItem.key} shopItem={shopItem} />
        ))}
      </Grid>
    </div>
        <div>
      <h1 className="text-size-header md:text-size-header-big leading-none">RELEASES</h1>
      <Grid className="mt-2 gap-y-4">
        {releases.map((shopItem) => (
          <ShopCard key={shopItem.key} shopItem={shopItem} />
        ))}
      </Grid>
    </div>

  </div>
);

export default Landing;
