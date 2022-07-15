import React from "react";
import MusicGridItem from "./MusicGridItem";

const MusicGrid = ({ musicData }) => {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-3 sm:grid-cols-2">
      {musicData.map(album => (
        <MusicGridItem key={album.key} album={album} />
      ))}
    </div>
  );
};

export default MusicGrid;
