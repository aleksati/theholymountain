import React, { useEffect, useRef } from "react";
import Icon from "./Icon";

const Card = React.forwardRef(
  (
    {
      showCloseButton = false,
      className,
      maxWidth,
      children,
      showShadow = true,
      handleClickOutside,
      label,
      modal,
      role,
    },
    ref
  ) => {
    const size = maxWidth ? maxWidth : "max-w-md";
    const shadow = showShadow ? "shadow-md" : "";
    const closeBtnRef = useRef(null);

    // on mount, move focus to the close button
    // for keyboard tab accessibiliy
    useEffect(() => {
      if (closeBtnRef.current && showCloseButton) {
        closeBtnRef.current.focus();
      }
    }, [closeBtnRef, showCloseButton]);

    return (
      <div
        ref={ref}
        className={`rounded-md bg-primary-light dark:bg-primary-dark ${className} ${size} ${shadow}`}
        aria-modal={modal}
        aria-label={label}
        role={role}
      >
        {showCloseButton ? (
          <div className="flex place-content-end">
            <button
              onClick={handleClickOutside}
              aria-label="Close dialog"
              ref={closeBtnRef}
            >
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
