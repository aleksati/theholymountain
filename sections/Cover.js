import Image from "next/image";
import cover from "../public/img/cover.jpg";
import LayoutPage from "../components/LayoutPage";

const Coverpage = () => {
  return (
    <LayoutPage>
      <Image
        objectFit="cover"
        src={cover}
        alt="Cover photo"
        layout="fill"
        quality={100}
        placeholder="blur"
        priority // should only be used on content above the fold
      />
    </LayoutPage>
  );
};

export default Coverpage;
