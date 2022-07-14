import Image from "next/image";

const CoverPhoto = ({ imgSrc, placeholder }) => (
  <Image
    src={imgSrc}
    alt="Band photo of The Holy Mountain"
    quality={100}
    placeholder="blur"
    layout="fill"
    objectFit="cover"
    blurDataURL={placeholder}
    priority // should only be used on content above the fold
  />
);

export default CoverPhoto;
