import MyImage from "../components/MyImage";
import SoMeBar from "../components/SoMeBar";

const bandPhoto = "/gallery/5-1.jpg";
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

const About = () => (
  <div className="flex flex-col space-y-4 p-4">
    <MyImage
      src={bandPhoto}
      width="1000"
      height="667"
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
    <div className="space-y-4">
      <p>
        The Holy Mountain is a dark synth-pop trio from Norway with accordion,
        vocals, synth and drums.
      </p>
      <p>
        After a four-track EP/demo in 2015, The Holy Mountain&apos;s debut
        studio album, <i>Toad of Light</i>, surfaced on Shhpuma Clean Feed
        Records in 2018, featuring accordion, synth and drums. The four-part
        instrumental release was a testament to dystopian sci-fi visions and
        cult-aesthetics, themes that would follow the band further into the
        future. Two years later, the duo became a trio and ventured deeper into
        the void with <i>Ending it All Tonight</i>, a fully-fledged electronic
        synth album inspired by synthwave, vaporwave, and dystopian 80s
        aesthetics.
      </p>
      <p>
        But the band&apos;s next studio album would department from the
        previous, and see the trio push new musical grounds.{" "}
        <i>The Dawns Here Are Quiet</i> (2023) is more reminiscent of Nordic
        jazz than anything else, with clear aesthetic inspirations from art
        cinema directors like Tarkovsky and Bergman. The release features eight
        tracks with the band's original instrumentation (accordion, drums and
        vocal), with added vocals.
      </p>
      <p>
        Already in early 2024, the trio is ready with their next EP,
        <i> They Are Asleep</i>, an upbeat breath of fresh air in their musical
        career. With this release, the band&apos;s characteristic melancholic
        sound is mixed with new sources of inspiration, such as techno, sci-fi
        horror and synth-pop.
      </p>
    </div>
  </div>
);

export default About;
