import MyImage from "../components/MyImage";
import SoMeBar from "../components/SoMeBar";

const bandPhoto = "/gallery/3-5.jpg";
const someObject = [
  {
    key: "spotify",
    url: "https://open.spotify.com/artist/04GXo6z6x1KLMG9weDPayK?si=rzFLNrlkTvml0zaKqo_tuQ",
  },
  {
    key: "applemusic",
    url: "https://music.apple.com/us/artist/the-holy-mountain/1685003735",
  },
  {
    key: "tidal",
    url: "https://tidal.com/browse/artist/39079821",
  },
  {
    key: "facebook",
    url: "https://www.facebook.com/theholymountaintrio",
  },
  {
    key: "instagram",
    url: "https://www.instagram.com/theholymountaintrio/",
  },
  {
    key: "bandcamp",
    url: "https://theholymountain.bandcamp.com/",
  },
  {
    key: "youtube",
    url: "https://www.youtube.com/channel/UCdjPuoIdC6-EDb_tR5h9ayg",
  },
];

const Landing = () => (
  <div className="flex flex-col space-y-4 p-4">
    <MyImage
      src={bandPhoto}
      width="1000"
      height="714"
      layout="responsive"
      // objectFit="contain"
    />
    <div>
      <SoMeBar someObject={someObject} />
    </div>
    <div className="text-secondary">
      <p>Andreas Angell - Accordion / Songwriter</p>
      <p>Aleksander Tidemann - Drums / Synthesizer</p>
      <p>Catharina Janner Røed - Vocals </p>
    </div>
  </div>
);

export default Landing;
