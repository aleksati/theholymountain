import ControlsAudioPlayer from "./ControlsAudioPlayer";
import getClockValue from "../functions/getClockValue";
import getCurrTheme from "../functions/getCurrTheme";
import { useRef, useEffect, useState } from "react";
import ClientOnly from "./ClientOnly";
import Spinner from "./Spinner";

const WaveFormOptions = (ref) => ({
  container: ref,
  waveColor: "rgb(33, 31, 36)", // "#211F24",
  progressColor: "rgb(239, 68, 68)", // "#300415",
  cursorColor: "rgb(239, 68, 68)", // "#300415",
  cursorWidth: 3,
  barWidth: 6,
  barRadius: 3,
  responsive: true,
  height: 100,
  partialRender: false, //true
  hideScrollbar: true,
  normalize: true,
});

// const url = "./audio/celest.mp3";

const AudioPlayer = ({ src }) => {
  const containerRef = useRef(null);
  const waveFormRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioIsMounted, setAudioIsMounted] = useState(false);
  const [stateTheme, setStateTheme] = useState(null);
  const { currTheme } = getCurrTheme();

  const create = async () => {
    try {
      const WaveSurfer = (await import("wavesurfer.js")).default;
      const options = WaveFormOptions(containerRef.current);
      waveFormRef.current = WaveSurfer.create(options);
      waveFormRef.current.load(src);

      waveFormRef.current.on("audioprocess", () => {
        let currTime = waveFormRef.current.getCurrentTime();
        currTime = getClockValue(currTime);
        document.getElementById("audiotime").innerText = currTime;
      });

      waveFormRef.current.on("ready", () => setAudioIsMounted(true));
    } catch (error) {
      console.log(error);
    }
  };

  // on mount, create the wavesurfer
  useEffect(() => {
    create();

    return () => {
      if (waveFormRef.current) {
        waveFormRef.current.destroy();
        setAudioIsMounted(false);
      }
    };
  }, []);

  // we need a seperate variable for the theme here because,
  // we dont want it set the waveColors etc, every time we reload.
  // instead, only when the theme actually changes.
  useEffect(() => {
    if (currTheme === stateTheme) return;
    setStateTheme(currTheme);
  }, [currTheme, stateTheme]);

  // set waveform colors based on theme
  //   useEffect(() => {
  //     if (audioIsMounted && stateTheme && waveFormRef.current) {
  //       if (stateTheme === "dark") {
  //         waveFormRef.current.setProgressColor("rgb(50, 141, 120)");
  //         waveFormRef.current.setWaveColor("rgb(255, 255, 255)");
  //         waveFormRef.current.setCursorColor("rgb(50, 141, 120)");
  //       }
  //       if (stateTheme === "light") {
  //         waveFormRef.current.setProgressColor("rgb(239, 68, 68)");
  //         waveFormRef.current.setWaveColor("rgb(33, 31, 36)");
  //         waveFormRef.current.setCursorColor("rgb(239, 68, 68)");
  //       }
  //     }
  //   }, [stateTheme, audioIsMounted, waveFormRef]);

  const handlePlayPause = () => {
    setIsPlaying((prevstate) => !prevstate);
    waveFormRef.current.playPause();
  };

  return (
    <ClientOnly className="flex items-center justify-start">
      {audioIsMounted ? (
        <ControlsAudioPlayer
          onPlayPause={handlePlayPause}
          isPlaying={isPlaying}
          timerId="audiotime"
        />
      ) : (
        <Spinner />
      )}
      <div className="relative w-2/4">
        <div id="waveform" ref={containerRef} />
      </div>
    </ClientOnly>
  );
};

export default AudioPlayer;
