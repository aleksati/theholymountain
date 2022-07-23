import React, { useEffect, useRef, useState } from "react";
import AlbumCover from "./AlbumCover";
import AlbumInfo from "./AlbumInfo";
import AlbumToolbar from "./AlbumToolbar";

const Album = React.forwardRef(({ album, showModal }, ref) => {
  const toolbarRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // beacuse of the HTML button tag. It has to be rendered on the client side in the browser.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Avoid opening details modal when clicking on the toolbar.
  const handleClick = event => {
    if (toolbarRef.current && ref.current) {
      if (toolbarRef.current.contains(event.target)) return;
      return showModal();
    }
  };

  const handleKey = event => {
    if (toolbarRef.current && ref.current) {
      if (toolbarRef.current.contains(event.target)) return;
      if (event.keyCode === 13) return showModal();
    }
  };

  return (
    <>
      {isMounted && (
        <div
          ref={ref}
          tabIndex="0"
          type="button"
          onClick={handleClick}
          onKeyDown={handleKey}
          className={`flex flex-col cursor-pointer p-4 items-center justify-center border border-secondary-skin-light hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 dark:border-secondary-skin-dark rounded-md space-y-4`}
          aria-label={`${album.title} album grid cell`}
        >
          <AlbumCover item={album} />
          <AlbumInfo album={album} />
          <AlbumToolbar album={album} ref={toolbarRef} />
        </div>
      )}
    </>
  );
});

export default Album;
