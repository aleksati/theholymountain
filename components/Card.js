import React from "react";
import Button from "./Button";
import { RiCloseLine } from "react-icons/ri";

const Card = React.forwardRef(
  (
    {
      showCloseButton = true,
      className,
      maxWidth,
      children,
      showShadow = true,
    },
    ref
  ) => {
    const size = maxWidth ? maxWidth : "max-w-md";
    const shadow = showShadow ? "shadow-md" : "";
    return (
      <div
        ref={ref}
        className={`rounded-md bg-primary-light dark:bg-primary-dark ${className} ${size} ${shadow}`}
      >
        {showCloseButton ? (
          <div className="flex place-content-end">
            <Button onClick={() => handleClickOutside()}>
              <RiCloseLine className={"text-md"} />
            </Button>
          </div>
        ) : null}
        {children}
      </div>
    );
  }
);

export default Card;
