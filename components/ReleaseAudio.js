import AudioPlayer from "./AudioPlayer";

const ReleaseAudio = ({ spotifyurl, previewurl }) => {
  if (spotifyurl) {
    return (
      <div className="pb-2 max-w-2xl">
        <iframe
          width="100%" // 700
          height="320" // 152
          // className="bg-primary-light dark:bg-primary-dark"
          src={spotifyurl}
        ></iframe>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-20 pt-2 pb-2 border rounded-md border-secondary">
      <p>Sorry, no audio preview avaliable..</p>
    </div>
  );
};

export default ReleaseAudio;
