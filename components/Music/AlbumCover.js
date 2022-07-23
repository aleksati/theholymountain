import React from "react";
import Image from "next/image";

const AlbumCover = ({ item }) => (
  <div className="relative w-full">
    <Image
      className="rounded-md shadow-md"
      src={`/img/${item.key}.png`}
      alt={`${item.title} album cover`}
      placeholder="blur"
      width="100%"
      height="100%"
      layout="responsive"
      // objectFit="fill"
      blurDataURL={`/img/placeholders/${item.key}.png`}
    />
  </div>
);

export default AlbumCover;
