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
        vocals, synth and drums. Since 2015, the band has produced an impressive
        discography of critically acclaimed, unique and genre-defying music with
        a taste for the dark and transcendental. Together with their immersive
        audio-visual live shows and distinct visual style, The Holy Mountain is
        a force to be reckoned with in the international alternative and indie
        music scene.
      </p>
      <p>
        As a duo, the band released their debut studio album{" "}
        <i>Toad of Light</i> in 2018 on Shhpuma Records (Clean feed). The
        four-part instrumental release was a testament to dystopian sci-fi
        visions and cult aesthetics, themes that would follow the band further
        into the future. Two years later, the group became a trio and ventured
        deeper into the void with <i>Ending it All Tonight</i>, a fully-fledged
        electronic synth album inspired by synthwave/vaporwave and the joys and
        horrors of 80s pop culture.
      </p>
      <p>
        With their next studio album, The Holy Mountain would push new musical
        grounds and depart from the previous. <i>The Dawns Here Are Quiet</i>{" "}
        (TDHAQ) was released in May 2023 and saw the band return to their
        original instrumentation of accordion, drums and synth, now with added
        vocals. Sonically, TDHAQ features eight tracks more reminiscent of
        Nordic jazz and indie-pop than anything else, with a vibe that&apos;s
        mellow and melancholic yet intense and uplifting. To date, TDHAQ is the
        most critically acclaimed and successful album in the band&apos;s
        history.
      </p>
      <p>
        Already in early 2024, the trio is ready with their next EP, an upbeat
        breath of fresh air in their musical career. <i>They Are Asleep</i> is
        all about having a party in hell, with lyrical themes about collective
        ignorance, death, and the decay of nature, and music reminiscent of Y2K
        techno, synth-pop and sci-fi horror. The EP features the same
        instrumentation as TDHAQ but with a sound more raw, uncompromised and
        rock-n-roll than ever. <i>They Are Asleep</i> represents a synthesis in
        the band&apos;s history; a combination of all the best The Holy Mountain
        has had to offer. So join us where tensions are high, where darkness
        means light, and where the light is dark.
      </p>
      {/* With the release, the band their highest acclaim yet  */}
      {/* with a distinct visual profile inspired by the art cinema of directors like Tarkovsky and Bergman. */}
    </div>
  </div>
);

export default About;
