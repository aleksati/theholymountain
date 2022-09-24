import AudioPlayer from "./AudioPlayer";

const AudioPageRelease = ({ item }) => {
  if (item.spotifyurl) {
    return (
      <div className="pt-2 pb-2">
        <iframe
          className="h-20 rounded-md lg:h-52"
          src={item.spotifyurl}
          width="100%"
          height="260px"
        ></iframe>
      </div>
    );
  }

  if (item.previewurl) {
    return (
      <div className="relative w-full pt-2 pb-2">
        <AudioPlayer src={item.previewurl} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-20 pt-2 pb-2 border rounded-md border-secondary">
      <p>Sorry, no audio preview avaliable..</p>
    </div>
  );
};

export default AudioPageRelease;
