import { useState } from "react";
import ButtonIconAndText from "./ButtonIconAndText";

const WrapperShowMore = ({ children }) => {
  const [isShown, setIsShown] = useState(false);

  return isShown ? (
    children
  ) : (
    <div className="absolute bottom-0 flex items-center justify-center w-full p-4 from-zinc-200 dark:from-zinc-900 bg-gradient-to-t to-transparent">
      <ButtonIconAndText
        keepTextOnSmallScreen={true}
        text="Show More"
        onClick={() => setIsShown(true)}
        iconId="downArrow"
      />
    </div>
  );
};

export default WrapperShowMore;
