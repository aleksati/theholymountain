import React, { useEffect } from "react";
import Card from "./Card";

const CardPopup = React.forwardRef(
  ({ handleClickOutside, children, className, label }, ref) => {
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

    // pass label prop to all children
    const childrenWithProps = React.Children.map(children, child => {
      // safe way and avoids a typescript error too.
      if (React.isValidElement(child))
        return React.cloneElement(child, { label });

      return child;
    });

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-brightness-50">
        <Card
          showCloseButton={true}
          handleClickOutside={handleClickOutside}
          className={className}
          ref={ref}
          role="dialog"
          modal={"true"}
          label={label}
        >
          {childrenWithProps}
        </Card>
      </div>
    );
  }
);

export default CardPopup;
