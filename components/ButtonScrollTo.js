import ButtonIconAndText from "./ButtonIconAndText";
import isTouchDevice from "../functions/isTouchDevice";
import { useEffect, useState } from "react";

const ButtonScrollTo = ({ targetId, visible = true, parentRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isTouch = isTouchDevice();

  const detectParentInFullViewPort = () => {
    if (parentRef.current) {
      const height = Math.floor(parentRef.current.getBoundingClientRect().y);
      setIsVisible(height < 0 ? true : false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", detectParentInFullViewPort);
    return () =>
      window.removeEventListener("scroll", detectParentInFullViewPort);
  }, []);

  if (isTouch && isVisible) {
    return (
      <nav className="fixed z-10 flex space-x-2 scrollLock-compensation right-4 bottom-4">
        <ButtonIconAndText
          iconId="upArrow"
          label="Back to top"
          onClick={() =>
            document.getElementById(targetId).scrollIntoView({
              behavior: "smooth",
            })
          }
        />
      </nav>
    );
  }

  return null;
};

export default ButtonScrollTo;