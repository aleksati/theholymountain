import React, { useEffect } from "react";
import Card from "./Card";

const CardPopup = React.forwardRef(
  ({ handleClickOutside, condition, children }, ref) => {
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
      <>
        {condition ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-50">
            <Card showCloseButton={false} ref={ref} className="p-4">
              {children}
            </Card>
          </div>
        ) : null}
      </>
    );
  }
);

export default CardPopup;
