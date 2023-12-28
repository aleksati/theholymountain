import AudioPlayer from "./AudioPlayer";

const ReleaseAudio = ({ item }) => {
  if (item.spotifyurl) {
    return (
      <div className="pb-2">
        <iframe
          width="100%"
          height="460" // 152
          allowtransparency="true"
          className="rounded-xl"
          src={item.spotifyurl}></iframe>
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

export default ReleaseAudio;
