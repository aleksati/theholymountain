import VideoPlayer from "./VideoPlayer";

const Video = ({ video, children }) => (
  <div
    className={`flex flex-col p-4 items-center justify-center border border-secondary-skin-light dark:border-secondary-skin-dark rounded-md space-y-4`}
    aria-label={`${video.title} video grid cell`}
  >
    <div className="relative w-full">
      <VideoPlayer url={video.url} title={video.title} />
    </div>

    <div className="leading-8 text-center">
      <h2 className="text-size-title">
        <b>{video.title.toUpperCase()}</b>
      </h2>
      <p className="text-secondary">
        {video.category} / {video.year}
      </p>
    </div>
    {children}
  </div>
);

export default Video;
