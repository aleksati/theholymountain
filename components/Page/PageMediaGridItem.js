import React from "react";
import MusicGridImage from "../Music/MusicGridImage";
import YoutubePlayer from "../Video/YoutubePlayer";

const PageMediaGridItem = ({ item, children }) => {
  return (
    <div
      className={`flex flex-col p-4 items-center justify-center border border-secondary-skin-light dark:border-secondary-skin-dark hover:border-secondary hover:dark:border-secondary duration-200 transition rounded-md space-y-4`}
      aria-label={`${item.title} album grid item`}
      tabIndex="0"
    >
      <div className="relative w-full">
        {item.id === "music" ? (
          <MusicGridImage item={item} />
        ) : (
          <YoutubePlayer item={item} />
        )}
      </div>

      <div className="leading-8 text-center">
        <h2 className="text-size-title">
          <b>{item.title.toUpperCase()}</b>
        </h2>
        <p className="text-secondary">
          {item.category} / {item.year}
        </p>
      </div>
      {children}
    </div>
  );
};

export default PageMediaGridItem;
