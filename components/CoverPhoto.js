import { memo } from "react";
import Image from "next/image";

const CoverPhoto = ({ imgSrc, placeholder, credit, creditLink }) => (
  <div className="block">
    <Image
      src={imgSrc}
      alt="Band photo of The Holy Mountain"
      className="absolute"
      quality={100}
      placeholder="blur"
      layout="fill"
      objectFit="cover"
      blurDataURL={placeholder}
      priority
    />
    {credit ? (
      <div className="absolute text-size-small right-4 bottom-4 text-primary-dark">
        <p>
          Photo |{" "}
          <a className="hover:underline" href={creditLink}>
            {credit}
          </a>
        </p>
      </div>
    ) : null}
  </div>
);

export default memo(CoverPhoto);
