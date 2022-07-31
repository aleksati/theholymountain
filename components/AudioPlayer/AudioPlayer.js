import React, { useRef, useEffect, useState } from "react";
import getCurrTheme from "../../utils/getCurrTheme";
import getClockValue from "../../utils/getClockValue";
import Image from "next/image";
import Button from "../Button";
import Icon from "../Icon";

const WaveFormOptions = ref => ({
  container: ref,
  waveColor: "#000", // "#211F24",
  progressColor: "rgb(217, 56, 33)", // "#300415",
  cursorColor: "#fff", // "#300415",
  cursorWidth: 3,
  barWidth: 6,
  barRadius: 3,
  responsive: true,
  height: 150,
  partialRender: false, //true
  hideScrollbar: true,
  normalize: true,
});

const url = "./audio/celestial-city.mp3";

const AudioPlayer = ({ src }) => {
  const containerRef = useRef(null);
  const waveFormRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [stateTheme, setStateTheme] = useState(null);
  const { currTheme } = getCurrTheme();

  const create = async () => {
    try {
      const WaveSurfer = (await import("wavesurfer.js")).default;
      const options = WaveFormOptions(containerRef.current);
      waveFormRef.current = WaveSurfer.create(options);
      waveFormRef.current.load(url);

      waveFormRef.current.on("audioprocess", () => {
        let currTime = waveFormRef.current.getCurrentTime();
        currTime = getClockValue(currTime);
        document.getElementById("audiotime").innerText = currTime;
      });

      waveFormRef.current.on("ready", () => setIsMounted(true));
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
        setIsMounted(false);
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
  useEffect(() => {
    if (isMounted && stateTheme && waveFormRef.current) {
      if (stateTheme === "dark") {
        waveFormRef.current.setProgressColor("rgb(50, 141, 120)");
        waveFormRef.current.setWaveColor("rgb(33, 31, 36)");
        waveFormRef.current.setCursorColor("rgb(50, 141, 120)");
      }
      if (stateTheme === "light") {
        waveFormRef.current.setProgressColor("rgb(217, 56, 33)");
        waveFormRef.current.setWaveColor("rgb(255, 255, 255)");
        waveFormRef.current.setCursorColor("rgb(217, 56, 33)");
      }
    }
  }, [stateTheme, isMounted, waveFormRef]);

  const handlePlayPause = () => {
    setIsPlaying(prevstate => !prevstate);
    waveFormRef.current.playPause();
  };

  return (
    <div className="flex items-center justify-center">
      {isMounted ? (
        <>
          <div>
            <Button onClick={handlePlayPause}>
              <Icon id={isPlaying ? "pause" : "play"} />
            </Button>
          </div>
          <div className="w-8 m-2 text-size-small text-primary-dark">
            <p id="audiotime">00:00 </p>
          </div>
        </>
      ) : (
        <div className="flex place-content-center">
          <Image
            src="/img/loading/loading.gif"
            alt="loading"
            width="25%"
            height="25%"
          />
        </div>
      )}
      <div className="relative w-2/4">
        <div id="waveform" ref={containerRef} />
      </div>
    </div>
  );
};

export default AudioPlayer;
