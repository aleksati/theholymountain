import React from "react";
import MusicGridImage from "../Music/MusicGridImage";
import YoutubePlayer from "../Video/YoutubePlayer";

const PageMediaGridItem = ({ item, children }) => {
  return (
    <div
      className={`rounded-md bg-primary-light dark:bg-primary-dark mt-4 mb-4 space-y-2`}
      aria-label={item.title}
    >
      <>
        {item.id === "music" ? (
          <MusicGridImage item={item} />
        ) : (
          <YoutubePlayer item={item} />
        )}
      </>
      <div>
        <h2 className="tracking-tight text-center text-size-title text-primary-light dark:text-primary-dark">
          <b>{item.title.toUpperCase()}</b>
        </h2>
        <p className="text-center text-secondary text-size-small">
          {item.category} / {item.year}
        </p>
      </div>
      {children}
    </div>
  );
};

export default PageMediaGridItem;
