import logoWhite from "../public/img/logo-white.png";
import logoBlack from "../public/img/logo-black.png";
import getCurrTheme from "../functions/getCurrTheme";
import SoMeBar from "./SoMeBar";
import Image from "next/image";

const ModalAbout = ({ label }) => {
  const { currTheme } = getCurrTheme();
  return (
    <div className="flex flex-col p-4 space-y-2" aria-label={`${label} dialog`}>
      <Image
        src={currTheme === "dark" ? logoWhite : logoBlack}
        alt="band logo"
        placeholder="blur"
      />
      <div>
        <p className="mb-2 text-primary-light dark:text-primary-dark text-size-regular">
          An avant-garde pop group from Oslo, Norway with accordion,
          synthesizer, drums, and vocals. We play hypnotic, dark and atmospheric
          music.
        </p>
      </div>
      <div className="text-size-small text-secondary">
        <p>Catharina Janner Røed - Vocals </p>
        <p>Andreas Angell - Accordion / Songwriter</p>
        <p>Aleksander Tidemann - Drums / Synthesizer</p>
      </div>
      <div>
        <SoMeBar iconSize="text-2xl" exclude={["nothing"]} className="mt-2" />
      </div>
    </div>
  );
};

export default ModalAbout;
