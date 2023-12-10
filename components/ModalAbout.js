import logoWhite from "../public/img/logo-white.png";
import logoBlack from "../public/img/logo-black.png";
import getCurrTheme from "../functions/getCurrTheme";
import SoMeBar from "./SoMeBar";
import Image from "next/image";

const ModalAbout = ({ label }) => {
  const { currTheme } = getCurrTheme();
  return (
    <div
      className="flex text-size-regular flex-col p-4 space-y-2"
      aria-label={`${label} dialog`}>
      <Image
        src={currTheme === "dark" ? logoWhite : logoBlack}
        alt="band logo"
        placeholder="blur"
      />
      <div>
        <p className="mb-2">
          The Holy Mountain is a groundbreaking trio from Oslo that moves
          between jazz, electronic synth music, alternative pop, and minimalism.
          The band&#39;s sound combines accordion, vocals, synth and drums to
          create unique and conceptual music.
        </p>
      </div>
      <div className="text-size-small text-secondary">
        <p>Catharina Janner Røed - Vocals </p>
        <p>Andreas Angell - Accordion / Songwriter</p>
        <p>Aleksander Tidemann - Drums / Synthesizer</p>
      </div>
      <div>
        <SoMeBar iconSize="text-3xl" exclude={["bandcamp"]} className="mt-2" />
      </div>
    </div>
  );
};

export default ModalAbout;
