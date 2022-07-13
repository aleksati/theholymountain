import React from "react";
import LayoutPage from "../components/LayoutPage";
import CardVideo from "../components/CardVideo";

const Videos = ({ videoData }) => (
  <LayoutPage id="videos" className="pb-4">
    <h1 className="mt-4 overflow-hidden text-center text-clip text-size-header sm:text-size-header-big">
      VIDEOS
    </h1>
    <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-3 sm:grid-cols-2">
      {videoData.map(video => (
        <CardVideo video={video} />
      ))}
    </div>
  </LayoutPage>
);

export default Videos;
