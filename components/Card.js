import React from "react";
import Icon from "./Icon";
import Button from "./Button";

const Card = React.forwardRef(
  (
    {
      showCloseButton = true,
      className,
      maxWidth,
      children,
      showShadow = true,
      handleClickOutside,
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
            <button onClick={handleClickOutside}>
              <Icon id="closeButton" />
            </button>
          </div>
        ) : null}
        {children}
      </div>
    );
  }
);

export default Card;
