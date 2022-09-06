import Image from "next/image";

const DiscographyItemCover = ({ itemKey, title }) => (
  <div className="relative w-full">
    <Image
      className="rounded-md backdrop-brightness-75"
      src={`/img/${itemKey}.png`}
      alt={`${title} album cover`}
      placeholder="blur"
      width="100%"
      height="100%"
      layout="responsive"
      objectFit="contain"
      blurDataURL={`/img/placeholders/${itemKey}.png`}
    />
  </div>
);

export default DiscographyItemCover;
