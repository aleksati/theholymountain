import React from "react";

const VideoPlayer = ({ url, title }) => (
  <iframe
    width="100%"
    alt={`${title} YouTube video`}
    height="315"
    src={url}
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  ></iframe>
);

export default VideoPlayer;
