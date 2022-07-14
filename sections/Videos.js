import React from "react";
import LayoutPage from "../components/LayoutPage";
import CardVideo from "../components/CardVideo";

const Videos = ({ videoData }) => (
  <LayoutPage id="videos" className="pb-4">
    <h1 className="mt-4 overflow-hidden text-center text-clip text-size-header-big sm:text-size-header-big">
      <b>VIDEOS</b>
    </h1>
    <div className="grid grid-cols-1 gap-6 p-4 xl:grid-cols-3 sm:grid-cols-2">
      {videoData.map(video => (
        <CardVideo key={video.key} video={video} />
      ))}
    </div>
  </LayoutPage>
);

export default Videos;
