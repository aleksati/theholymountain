import Button from "./Button";
import Icon from "./Icon";

const ControlsAudioPlayer = ({ onPlayPause, isPlaying, timerId }) => (
  <>
    <div>
      <Button onClick={onPlayPause} className="">
        <Icon id={isPlaying ? "pause" : "play"} />
      </Button>
    </div>
    <div className="w-8 ml-2 mr-4 text-size-small">
      <p id={timerId}>00:00</p>
    </div>
  </>
);

export default ControlsAudioPlayer;
