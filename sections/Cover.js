import Image from "next/image";
import cover from "../public/img/cover.jpg";

const Coverpage = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        objectFit="cover"
        src={cover}
        alt="Cover photo"
        layout="fill"
        quality={100}
        placeholder="blur"
        priority // should only be used on content above the fold
      />
    </div>
  );
};

export default Coverpage;
