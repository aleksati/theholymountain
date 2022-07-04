import React from "react";
import Image from "next/image";
import ToggleRelease from "./ToggleRelease";

const CardReleasePhoto = React.forwardRef(({ release, onClick }, ref) => (
  <div className="relative justify-center mt-4 mb-4 group">
    <Image
      className="rounded-md shadow-md"
      src={`/img/${release.key}.png`}
      alt={`${release.title} card image`}
      placeholder="blur"
      width="100%"
      height="100%"
      layout="responsive"
      objectFit="contain"
      blurDataURL={`/img/placeholders/${release.key}.png`}
    />
    <ToggleRelease release={release} onClick={onClick} ref={ref} />
  </div>
));

export default CardReleasePhoto;
