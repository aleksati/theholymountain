import LayoutPage from "../layouts/LayoutPage";
import MyImage from "../components/MyImage";

const about = () => (
  <LayoutPage pageMeta={{ title: "The Holy Mountain | about" }}>
    <div className="flex flex-col space-y-4">
      <div className="overflow-hidden rounded-md border border-secondary-skin-dark">
        <MyImage
          src="/gallery/3-5.jpg"
          width="1000"
          height="714"
          layout="responsive"
          // objectFit="contain"
        />
      </div>
      <div className="space-y-4 text-size-regular text-center">
        <h1 className="text-size-header md:text-size-header-big leading-none">ABOUT</h1>
        <p>
          The Holy Mountain is a critically acclaimed and genre-defying indie band based in the cold Norway. The trio's
          signature sound combines accordion, synth, vocals, and drums to create dark and hypnotic worlds. Places where
          Philip Glass' minimalist arrangements meet the dreamy synth-pop of Beach House (US), framed by the cult film
          aestethics of filmmakers like David Lynch, John Carpenter, and Ingmar Bergman. Think of a red sunset at a dark
          disco. Since 2015, The Holy Mountain has built a large and varied discography, including electronic and acoustic
          albums, EPs, and soundtracks for film and TV.
        </p>
        <div>
          <p>Andreas Angell - Accordion and Songwriter</p>
          <p>Aleksander Tidemann - Drums and Synthesizer</p>
          <p>Catharina Janner Røed - Vocals </p>
        </div>
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
