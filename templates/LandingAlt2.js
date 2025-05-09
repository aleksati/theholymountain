import MyImage from "../components/MyImage";
import SoMeBar from "../components/SoMeBar";

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

const LandingAlt2 = () => (
  <div className="bg-primary-dark mx-auto pt-4 text-primary-dark pb-4 p-4 space-y-6 text-xl">
    {/* <div className="container pb-4 mx-auto pt-6 space-y-6 px-2"> */}
    <div>
      <iframe
        width="100%"
        alt={`Searing Light YouTube video`}
        height="440"
        src={"https://www.youtube.com/embed/gAo2EbLAy7A?si=xfUBKsEpwb9tvUKN"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
    <div>
      <iframe
        width="100%" // 700
        height="420" // 152
        className="rounded-2xl"
        src={"https://open.spotify.com/embed/album/0JExCWKqyzrifd7TX4m13J?utm_source=generator&theme=0"}
        >
        </iframe>
      {/* <iframe
        width="100%" // 700
        height="420" // 152
        src="https://bandcamp.com/EmbeddedPlayer/album=2789406497/size=large/bgcol=333333/linkcol=0f91ff/artwork=small/transparent=true/"></iframe> */}
    </div>
    <div className="border border-secondary-skin-dark p-4 space-y-4">
      {/* <h1 className="text-4xl font-bold">Anmeldelser 2024</h1> */}
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-2">
        <div className="backdrop-brightness-150 p-2">
          <p className="italic p-2">
            «dark yet catchy synth pop, an immersive release that transports
            listeners to a world where the line between heaven and hell is
            blurred.”
          </p>
          -{" "}
          <a
            className="text-blue-400"
            href="https://plasticmag.co.uk/2024/04/interview-the-holy-mountain-releases-new-ep/0">
            Plastic Mag (UK)
          </a>
        </div>
        <div className="backdrop-brightness-150 p-2">
          <p className="italic p-2">
            «På They Are Asleep hører vi kritikerroste låter omtalt av
            amerikanske Melomani som “synth-pop brilliance” og av britiske
            Plastic Magazine som “a superb showcase of the trio’s creativity and
            ability to craft hook-filled music”.
          </p>
          -{" "}
          <a
            className="text-blue-400"
            href="https://eternal-terror.com/2024/04/19/the-holy-mountain-slipper-nytt-ep">
            Eternal Terror (SVE)
          </a>
        </div>
        <div className="backdrop-brightness-150 p-2">
          <p className="italic p-2">
            «Fans of dark, experimental music can sink their teeth into the
            intimate, atmospheric music here, while synth-pop music fans will
            find a new favorite band in The Holy Mountain»
          </p>
          -{" "}
          <a
            className="text-blue-400"
            href="https://cultartes.com/the-holy-mountain-digs-into-your-subconscious-with-its-synth-pop-perfection/">
            Cultartes (ROM)
          </a>
        </div>
        <div className="backdrop-brightness-150 p-2">
          <p className="italic p-2">
            «Det er lekent. Men det er fortsatt mystisk og det høres ut som en
            rød solnedgang inne på en mørk discofest. Hvis det er en lyd.»
          </p>
          -{" "}
          <a
            className="text-blue-400"
            href="https://www.universitas.no/synth-pop-uten-spenning/376230">
            Universitas (NO)
          </a>
        </div>
        <div className="backdrop-brightness-150 p-2">
          <p className="italic p-2">
            {" "}
            Although walking in the light can be both overwhelming and
            inspiring, it can also entail death. “Searing Light” exists in this
            tense area where light might imply darkness and darkness can signify
            light.
          </p>
          - Exclusive interview with{" "}
          <a
            className="text-blue-400"
            href="https://plasticmag.co.uk/2024/04/interview-the-holy-mountain-releases-new-ep/0">
            Illustrate Mag (UK)
          </a>{" "}
        </div>
      </div>
    </div>
    <MyImage
      // src={"/pressekit/3 foto katinka hustad ny.jpg"}
      src={"/gallery/3-5.jpg"}
      width="1000"
      height="714"
      layout="responsive"
    />
    <div className="border border-secondary-skin-dark p-4 space-y-4">
      {/* <h1 className="text-4xl font-bold">Bio</h1> */}
      <p>
        The Holy Mountain is a genre-defying synth-pop trio from Norway. With
        their conceptually unique style and a taste for the dark and
        transcendental, the band is often described as a mix of the American TV
        series Twin Peaks and synth-pop act Beach House (US), with
        roots in the classical minimalist tradition.
      </p>
      <p>
        In 2024, the band released their latest EP, <b>They Are Asleep</b>.
        With lyrical themes about the decay of nature and music reminiscent of
        Y2K techno, synth-pop and sci-fi horror, They Are Asleep is all about
        having a party in hell.
      </p>
      <p>
        Already, the EP has been critically acclaimed, with excellent
        international reviews, thousands of monthly listeners and frequent radio
        listings.
      </p>
      <div>
        <p>Andreas Angell - Accordion and Songwriter</p>
        <p>Aleksander Tidemann - Drums and Synthesizer</p>
        <p>Catharina Janner Røed - Vocals </p>
      </div>
    </div>
    <div className="border border-secondary-skin-dark p-4 space-y-4">
      {/* <h1 className="text-4xl font-bold">Pressebilder</h1> */}
      {/* <p>
          Last ned bilder i høy kvalitet fra{" "}
          <a
            className="text-blue-400"
            href="https://www.dropbox.com/scl/fo/ikw02oapink8o5abulppx/AFfisoRggw-EsBhWipuZSX8?rlkey=5lc51mocoum0bh2o49lk4wc2i&st=6nrs13tg&dl=0"
          >
            vår Dropbox
          </a>
          .
        </p> */}
      <div className=" grid grid-rows-1 grid-cols-2 md:grid-cols-3 gap-2">
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
        <MyImage
          key={"gallery/4-1.jpg"}
          src={"gallery/4-1.jpg"}
          layout="responsive"
          objectFit="contain"
          isExpandable={true}
        />
      </div>
    </div>
    {/* <div className="p-4 space-y-4">
      <SoMeBar someObject={someObject} />
    </div> */}
  </div>
);

export default LandingAlt2;
