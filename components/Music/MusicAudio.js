import AudioPlayer from "../AudioPlayer/AudioPlayer";

const MusicAudio = ({ item }) => {
  if (item.spotifyurl) {
    return (
      <div className="pt-4 pb-4">
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
      <div className="relative w-full pt-4 pb-4">
        <AudioPlayer src={item.previewurl} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-20 pt-4 pb-4 border rounded-md border-secondary">
      <p>Sorry, no audio preview avaliable..</p>
    </div>
  );
};

export default MusicAudio;
