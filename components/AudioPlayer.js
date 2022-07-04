const AudioPlayer = ({ className }) => {
  return (
    <iframe
      className={className}
      src="https://open.spotify.com/embed/album/0iX62K9LGjdNEVkrxeC9Rf?utm_source=generator&theme=0"
      width="100%"
      height="440"
      frameBorder="0"
    ></iframe>
  );
};

export default AudioPlayer;
