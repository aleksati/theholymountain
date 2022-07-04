import React from "react";
import Button from "./Button";

const ToggleReleaseAudio = React.forwardRef(({ onClick }, ref) => (
  <Button
    colorStyle={"border-gray-600 hover:border-white text-primary-dark"}
    onClick={onClick}
    ref={ref}
  >
    Listen
  </Button>
));

export default ToggleReleaseAudio;
