import ReleaseAudio from "../components/ReleaseAudio";
import MyImage from "../components/MyImage";
import SoMeBar from "../components/SoMeBar";
import VideoPlayer from "../components/VideoPlayer";

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

const LandingAlt = () => (
  <div className="pb-4 space-y-6 p-4">
    {/* <div className="container pb-4 mx-auto pt-6 space-y-6 px-2"> */}
    {/* <h1 className="text-6xl font-bold">THEY ARE ASLEEP</h1> */}
    <VideoPlayer url="https://www.youtube.com/embed/gAo2EbLAy7A?si=D6xrM8y3QL7_gDDX" />
    <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-2 text-lg">
      <div className="backdrop-brightness-150 p-2">
        <p className="italic p-2">
          «dark yet catchy synth pop, an immersive release that transports
          listeners to a world where the line between heaven and hell is
          blurred.”
        </p>
        -{" "}
        <a
          className="text-blue-400"
          href="https://plasticmag.co.uk/2024/04/interview-the-holy-mountain-releases-new-ep/0"
        >
          Plastic Mag (UK)
        </a>
      </div>
      <div className="backdrop-brightness-150 p-2">
        <p className="italic p-2">
          «På They Are Asleep hører vi kritikerroste låter omtalt av amerikanske
          Melomani som “synth-pop brilliance” og av britiske Plastic Magazine
          som “a superb showcase of the trio’s creativity and ability to craft
          hook-filled music”.
        </p>
        -{" "}
        <a
          className="text-blue-400"
          href="https://eternal-terror.com/2024/04/19/the-holy-mountain-slipper-nytt-ep"
        >
          Eternal Terror (SVE)
        </a>
      </div>
      <div className="backdrop-brightness-150 p-2">
        <p className="italic p-2">
          «Fans of dark, experimental music can sink their teeth into the
          intimate, atmospheric music here, while synth-pop music fans will find
          a new favorite band in The Holy Mountain»
        </p>
        -{" "}
        <a
          className="text-blue-400"
          href="https://cultartes.com/the-holy-mountain-digs-into-your-subconscious-with-its-synth-pop-perfection/"
        >
          Cultartes (ROM)
        </a>
      </div>
      <div className="backdrop-brightness-150 p-2">
        <p className="italic p-2">
          «Det er lekent. Men det er fortsatt mystisk og det høres ut som en rød
          solnedgang inne på en mørk discofest. Hvis det er en lyd.»
        </p>
        -{" "}
        <a
          className="text-blue-400"
          href="https://www.universitas.no/synth-pop-uten-spenning/376230"
        >
          Universitas (NO)
        </a>
      </div>
      <div className="backdrop-brightness-150 p-2">
        <p className="italic p-2">
          {" "}
          Although walking in the light can be both overwhelming and inspiring,
          it can also entail death. “Searing Light” exists in this tense area
          where light might imply darkness and darkness can signify light.
        </p>
        - Ekslusivt intervju med{" "}
        <a
          className="text-blue-400"
          href="https://plasticmag.co.uk/2024/04/interview-the-holy-mountain-releases-new-ep/0"
        >
          Illustrate Mag (UK)
        </a>{" "}
      </div>
    </div>
    <MyImage
      src={"/gallery/3-4.jpg"}
      width="1000"
      height="667"
      layout="responsive"
    />
    <div className="border-secondary-skin-dark space-y-6 text-xl">
      <p>
        The Holy Mountain is a genre-defying and critically acclaimed synth-pop
        trio from Norway. With their conceptually unique style and taste for the
        dark and transcendental, the band is described as a cross between the TV
        series Twin Peaks and the American synth-pop act Beach House (US), with
        clear roots from classical minimalist traditions.
      </p>
      <div>
        <p>Andreas Angell - Accordion and Songwriter</p>
        <p>Aleksander Tidemann - Drums and Synthesizer</p>
        <p>Catharina Janner Røed - Vocals </p>
      </div>
    </div>
    {/* <div className="max-w-2xl pb-4">
      <h1 className="text-2xl py-2 font-bold">Latest</h1>
      <iframe
        width="100%"
        height="120"
        src={
          "https://bandcamp.com/EmbeddedPlayer/track=2424592500/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/"
        }></iframe>
    </div> */}
    <div className=" grid grid-rows-1 grid-cols-2 md:grid-cols-3 gap-2">
      <MyImage
        key={"gallery/4-1.jpg"}
        src={"gallery/4-1.jpg"}
        layout="responsive"
        objectFit="contain"
        isExpandable={true}
      />
      <MyImage
        key={"pressekit/4 foto katinka hustad album cover versjon.jpg"}
        src={"pressekit/4 foto katinka hustad album cover versjon.jpg"}
        layout="responsive"
        objectFit="contain"
        isExpandable={true}
      />
      <MyImage
        key={"gallery/2-7.jpg"}
        src={"gallery/2-7.jpg"}
        layout="responsive"
        objectFit="contain"
        isExpandable={true}
      />
      <MyImage
        key={"gallery/3-5.jpg"}
        src={"gallery/3-5.jpg"}
        layout="responsive"
        objectFit="contain"
        isExpandable={true}
      />
      <MyImage
        key={"gallery/3-3.jpg"}
        src={"gallery/3-3.jpg"}
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
        key={"gallery/5-1.jpg"}
        src={"gallery/5-1.jpg"}
        layout="responsive"
        objectFit="contain"
        isExpandable={true}
      />
      <MyImage
        key={"gallery/2-4.jpg"}
        src={"gallery/2-4.jpg"}
        layout="responsive"
        objectFit="contain"
        isExpandable={true}
      />
      <MyImage
        key={"gallery/3-7.jpg"}
        src={"gallery/3-7.jpg"}
        layout="responsive"
        objectFit="contain"
        isExpandable={true}
      />
    </div>
    <div className="flex space-x-2">
      <SoMeBar someObject={someObject} />
    </div>
  </div>
);

export default LandingAlt;
