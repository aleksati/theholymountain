import Image from "next/image";

const CoverPhoto = ({ img, placeholder }) => (
  <>
    <Image
      src={img}
      alt="Cover photo"
      quality={100}
      width="100%"
      height="100%"
      placeholder="blur"
      layout="fill"
      objectFit="cover"
      blurDataURL={placeholder}
      priority // should only be used on content above the fold
    />
  </>
);

export default CoverPhoto;
