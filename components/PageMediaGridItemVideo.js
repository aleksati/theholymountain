import VideoPlayer from "./VideoPlayer";

const PageMediaGridItemVideo = ({ item }) => (
  <div className="p-2" aria-label={item.title}>
    <div
      className={`flex flex-col pb-2 items-center justify-center rounded-md space-y-2`}
      aria-label={`${item.title} video grid cell`}
    >
      <div className="relative w-full">
        <VideoPlayer url={item.url} title={item.title} />
      </div>
    </div>
    <div className="text-center">
      <p>
        <b>{item.title.toUpperCase()}</b>
      </p>
      <p className="text-secondary text-size-small">
        {item.category} | {item.year}
      </p>
    </div>
  </div>
);

export default PageMediaGridItemVideo;
