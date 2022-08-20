import React, { useState } from "react";
import Button from "./Button";

const ShowMoreWrapper = ({ children }) => {
  const [isShown, setIsShown] = useState(false);

  return isShown ? (
    children
  ) : (
    <div className="flex items-center justify-center p-4">
      <Button onClick={() => setIsShown(true)}>Show More</Button>
    </div>
  );
};

export default ShowMoreWrapper;
