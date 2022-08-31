import React, { useState } from "react";
import Button from "./Button";

const WrapperShowMore = ({ children }) => {
  const [isShown, setIsShown] = useState(false);

  return isShown ? (
    children
  ) : (
    <div className="absolute bottom-0 flex items-center justify-center w-full p-4 from-zinc-400 dark:from-zinc-900 bg-gradient-to-t to-transparent">
      <Button onClick={() => setIsShown(true)}>Show More</Button>
    </div>
  );
};

export default WrapperShowMore;
