import React, { useRef, useEffect, useState } from "react";

const WaveFormOptions = ref => ({
  container: ref,
  waveColor: "#fff",
  progressColor: "#300415",
  cursorColor: "#300415",
  barWidth: 6,
  barRadius: 3,
  responsive: true,
  height: 150,
  partialRender: true,
  hideScrollbar: true,
});

const url =
  "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3";

const AudioPlayer = ({ src }) => {
  const containerRef = useRef(null);
  const waveFormRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const create = async () => {
    const WaveSurfer = (await import("wavesurfer.js")).default;
    const options = WaveFormOptions(containerRef.current);
    waveFormRef.current = WaveSurfer.create(options);
    waveFormRef.current.load(url);
  };

  useEffect(() => {
    create();

    return () => {
      if (waveFormRef.current) {
        waveFormRef.current.destroy();
      }
    };
  }, []);

  const handlePlayPause = () => {
    // waveFormRef.current.setWaveColor("#000000");
    setPlaying(prevstate => !prevstate);
    waveFormRef.current.playPause();
  };

  return (
    <div className="flex items-center justify-center">
      <div>
        <a onClick={handlePlayPause}>{playing ? "pause" : "play"}</a>
      </div>
      <div className="relative w-3/4 m-auto">
        <div id="waveform" ref={containerRef} />
      </div>
    </div>
  );
};

export default AudioPlayer;
