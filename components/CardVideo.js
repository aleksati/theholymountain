import React from "react";
import Card from "../components/Card";

const CardVideo = ({ video }) => (
  <div className="place-items-center">
    <Card
      key={video.key}
      showCloseButton={false}
      className="mt-4 mb-4"
      maxWidth="override"
    >
      <iframe
        width="100%"
        height="315"
        src={video.url}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Card>
    <div>
      <h2 className="tracking-tight text-center text-size-title text-primary-light dark:text-primary-dark">
        {video.title}
      </h2>
      <p className="text-center text-secondary text-size-regular">
        {video.category} / {video.year}
      </p>
    </div>
  </div>
);

export default CardVideo;
