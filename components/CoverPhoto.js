import Image from "next/image";

const CoverPhoto = ({ imgSrc, placeholder }) => (
  <Image
    src={imgSrc}
    alt="Cover photo"
    quality={100}
    placeholder="blur"
    layout="fill"
    objectFit="cover"
    blurDataURL={placeholder}
    priority // should only be used on content above the fold
  />
);

export default CoverPhoto;
