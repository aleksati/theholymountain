import AudioPlayer from "./AudioPlayer";

const PageReleaseAudio = ({ item }) => {
  if (item.spotifyurl) {
    return (
      <div className="pt-2 pb-2">
        <iframe
          width="100%"
          height="152"
          frameborder="0"
          allowtransparency="true"
          className="rounded-2xl"
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

export default PageReleaseAudio;
