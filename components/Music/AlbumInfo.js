import React from "react";

const AlbumInfo = ({ album }) => (
  <div className="leading-8 text-center">
    <h2 className="text-size-title">
      <b>{album.title.toUpperCase()}</b>
    </h2>
    <p className="text-secondary">
      {album.category} / {album.year}
    </p>
  </div>
);

export default AlbumInfo;
