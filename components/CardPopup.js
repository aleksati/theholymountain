import React, { useEffect } from "react";
import Card from "./Card";

// the condition should be outside the component for more control.

const CardPopup = React.forwardRef(
  (
    { handleClickOutside, children, className, showCloseButton = false },
    ref
  ) => {
    // handle click outside of the card
    useEffect(() => {
      const onClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target))
          return handleClickOutside();
      };

      document.addEventListener("click", onClickOutside, true);
      return () => {
        document.removeEventListener("click", onClickOutside, true);
      };
    }, [ref]);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-brightness-50">
        <Card
          showCloseButton={showCloseButton}
          handleClickOutside={handleClickOutside}
          ref={ref}
          className={className}
        >
          {children}
        </Card>
      </div>
    );
  }
);

export default CardPopup;
