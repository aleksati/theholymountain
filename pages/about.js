import LayoutPage from "../layouts/LayoutPage";
import MyImage from "../components/MyImage";
import SoMeBar from "../components/SoMeBar";

const bandPhoto = "cover.jpg";
const someObject = [
  {
    key: "facebook",
    url: "https://www.facebook.com/theholymountaintrio",
  },
  {
    key: "instagram",
    url: "https://www.instagram.com/theholymountaintrio/",
  },
  {
    key: "youtube",
    url: "https://www.youtube.com/channel/UCdjPuoIdC6-EDb_tR5h9ayg",
  },
  {
    key: "spotify",
    url: "https://open.spotify.com/artist/04GXo6z6x1KLMG9weDPayK?si=rzFLNrlkTvml0zaKqo_tuQ",
  },
  {
    key: "tidal",
    url: "https://tidal.com/browse/artist/39079821",
  },
  {
    key: "applemusic",
    url: "https://music.apple.com/us/artist/the-holy-mountain/1685003735",
  },
  {
    key: "soundcloud",
    url: "https://soundcloud.com/theholymountainduo",
  },
];

const about = () => (
  <LayoutPage pageMeta={{ title: "The Holy Mountain" }}>
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
        <p>Catharina Janner Røed - Vocals </p>
        <p>Andreas Angell - Accordion / Songwriter</p>
        <p>Aleksander Tidemann - Drums / Synthesizer</p>
      </div>
      <div className="space-y-4">
        <p>
          The Holy Mountain is a genre-defying trio from Oslo, Norge that moves
          between jazz, electronic synth music, alternative pop, and minimalism.
          The band&apos;s sound combines accordion, vocals, synth and drums to
          create unique and conceptual music.
        </p>
        <p>
          In 2023, the band released "The Dawns Here Are Quiet," an 8-track
          studio album blending experimental jazz and alternative pop inspired
          by the poetry of Arseny Tarkovsky and Nordic cinema. 3 years prior, in
          2020, The Holy Mountain released "Ending it All Tonight", a
          full-fledged electronic studio album with 10 tracks inspired by
          synthwave, vaporwave, and 80s aesthetics. The bands instrumental
          debut, "Toad of Light", surfaced in 2018 and was a testament to sci-fi
          film music and the psychedelic movement in 70s pop culture.
        </p>
        <p>
          Already in early 2024, the trio is ready with their next EP, "They Are
          Asleep", an upbeat breath of fresh air in their musical career. With
          this release, the band&apos;s characteristic melancholic sound is
          mixed with new sources of inspiration, such as Y2K-techno and
          synth-pop.
        </p>
      </div>
    </div>
  </LayoutPage>
);

export default about;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};