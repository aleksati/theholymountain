import React, { useRef } from "react";
import AlbumCover from "./AlbumCover";
import AlbumInfo from "./AlbumInfo";
import AlbumToolbar from "./AlbumToolbar";

const Album = React.forwardRef(({ album, showModal }, ref) => {
  const toolbarRef = useRef(null);

  // Avoid opening details modal when clicking on the toolbar.
  const handleClick = event => {
    if (toolbarRef.current && ref.current) {
      if (toolbarRef.current.contains(event.target)) return;
      showModal();
    }
  };

  return (
    <div
      tabIndex="0"
      ref={ref}
      onClick={handleClick}
      className={`flex flex-col cursor-pointer p-4 items-center justify-center border border-secondary-skin-light hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 dark:border-secondary-skin-dark rounded-md space-y-4`}
      aria-label={`${album.title} album grid cell`}
    >
      <AlbumCover item={album} />
      <AlbumInfo album={album} />
      <AlbumToolbar album={album} ref={toolbarRef} />
    </div>
  );
});

export default Album;
