import Button from "../Button";
import Icon from "../Icon";

const ControlsAudioPlayer = ({ onPlayPause, isPlaying, timerId }) => (
  <>
    <div>
      <Button onClick={onPlayPause}>
        <Icon id={isPlaying ? "pause" : "play"} />
      </Button>
    </div>
    <div className="w-8 m-2 text-size-small">
      <p id={timerId}>00:00</p>
    </div>
  </>
);

export default ControlsAudioPlayer;
