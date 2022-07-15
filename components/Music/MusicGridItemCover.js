import React from "react";
import Image from "next/image";

const MusicGridItemCover = ({ album }) => {
  return (
    <>
      <Image
        className="rounded-md shadow-md"
        src={`/img/${album.key}.png`}
        alt={`${album.title} album cover`}
        placeholder="blur"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
        blurDataURL={`/img/placeholders/${album.key}.png`}
      />
      <div>
        <h2 className="tracking-tight text-center text-size-title text-primary-light dark:text-primary-dark">
          <b>{album.title.toUpperCase()}</b>
        </h2>
        <p className="text-center text-secondary text-size-small">
          {album.category} / {album.year}
        </p>
      </div>
    </>
  );
};

export default MusicGridItemCover;
