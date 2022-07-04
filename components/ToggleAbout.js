import Button from "./Button";
import { RiQuestionMark } from "react-icons/ri";

const ToggleAbout = ({ iconSize, handleClick, isAbout }) => (
  <>
    {!isAbout ? (
      <Button onClick={handleClick}>
        <RiQuestionMark className={iconSize} />
      </Button>
    ) : null}
  </>
);

export default ToggleAbout;
