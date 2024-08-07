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
  <div className="pb-4 space-y-6 p-4">
    {/* <div className="container pb-4 mx-auto pt-6 space-y-6 px-2"> */}
    <MyImage
      src={"/gallery/3-5.jpg"}
      width="1000"
      height="714"
      layout="responsive"
    />
    <div className="flex space-x-2">
      <SoMeBar someObject={someObject} />
    </div>
    <div className="border-secondary-skin-dark space-y-4">
      {/* <h1 className="text-4xl font-bold">Bio</h1> */}
      <p>
        The Holy Mountain is a genre-defying and critically acclaimed synth-pop
        trio from Norway. With their conceptually unique style and taste for the
        dark and transcendental, the band is described as a cross between the TV
        series Twin Peaks and the American synth-pop act Beach House (US), with
        clear roots in classical minimalism.
      </p>
      <div>
        <p>Andreas Angell - Accordion and Songwriter</p>
        <p>Aleksander Tidemann - Drums and Synthesizer</p>
        <p>Catharina Janner Røed - Vocals </p>
      </div>
    </div>
  </div>
  // </div>
);

export default Landing;
