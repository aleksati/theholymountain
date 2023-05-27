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
          The Holy Mountain is a groundbreaking avant-garde pop trio from
          Norway, blending accordion, synthesizer, drums, and vocals to create
          hypnotic compositions with dark and mystical qualities.
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
