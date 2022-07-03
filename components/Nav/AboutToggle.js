import React from "react";
import Button from "../Button";
import { RiQuestionMark, RiCloseLine } from "react-icons/ri";

const AboutToggle = React.forwardRef(
  ({ iconSize, handleClick, isAbout }, ref) => {
    return (
      <Button onClick={handleClick} ref={ref}>
        {isAbout ? (
          <RiCloseLine className={iconSize} />
        ) : (
          <RiQuestionMark className={iconSize} />
        )}
      </Button>
    );
  }
);

export default AboutToggle;
