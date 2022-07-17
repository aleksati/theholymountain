import React from "react";
import Image from "next/image";

const MusicGridImage = ({ item }) => (
  <Image
    className="rounded-md shadow-md"
    src={`/img/${item.key}.png`}
    alt={`${item.title} album cover`}
    placeholder="blur"
    width="100%"
    height="100%"
    layout="responsive"
    objectFit="contain"
    blurDataURL={`/img/placeholders/${item.key}.png`}
    tabIndex="0"
  />
);

export default MusicGridImage;
