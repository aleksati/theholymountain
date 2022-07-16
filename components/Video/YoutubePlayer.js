import React from "react";

const YoutubePlayer = ({ item }) => (
  <iframe
    width="100%"
    alt={`${item.title} YouTube player`}
    height="315"
    src={item.url}
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  ></iframe>
);

export default YoutubePlayer;
