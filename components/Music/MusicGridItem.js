import MusicGridItemCover from "./MusicGridItemCover";
import MusicGridItemToolbar from "./MusicGridItemToolbar";

const MusicGridItem = ({ album }) => {
  return (
    <div
      className={`rounded-md bg-primary-light dark:bg-primary-dark mt-4 mb-4 space-y-2`}
      aria-label={album.title}
    >
      <MusicGridItemCover album={album} />
      <MusicGridItemToolbar album={album} />
    </div>
  );
};

export default MusicGridItem;
