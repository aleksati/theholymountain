import VideoPlayer from "./VideoPlayer";

const GridItemVideo = ({ title, url, category, year }) => (
  <div className="p-2 py-4" aria-label={title}>
    <div
      className={`flex flex-col pb-2 items-center justify-center rounded-md space-y-2`}
      aria-label={`${title} video grid cell`}>
      <div className="relative w-full">
        <VideoPlayer url={url} title={title} />
      </div>
    </div>
    {/* <div className="text-center text-xl">
      <p>{title.toUpperCase()}</p>
      <p className="text-secondary text-regular">
        {category} | {year}
      </p>
    </div> */}
  </div>
);

export default GridItemVideo;
