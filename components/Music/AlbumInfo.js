import React from "react";

const AlbumInfo = ({ album }) => (
  <div className="text-center">
    <h2 className="font-normal text-size-title">{album.title.toUpperCase()}</h2>
    <p className="text-secondary">
      {album.category} / {album.year}
    </p>
  </div>
);

export default AlbumInfo;
