import React, { useEffect } from "react";
import Button from "./Button";
import Icon from "./Icon";

const ButtonIconAndText = React.forwardRef(
  (
    {
      onClick,
      pressed,
      iconId,
      iconSize,
      text,
      hasTooltip,
      tooltipText,
      label,
      tabOrder,
      keepTextOnSmallScreen,
      className,
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        onClick={onClick}
        showTooltip={hasTooltip ? true : false}
        tooltipMessage={hasTooltip ? tooltipText : null}
        aria-label={label}
        aria-pressed={pressed}
        tabOrder={tabOrder}
        className={className}
      >
        <Icon id={iconId} iconSize={iconSize ? iconSize : null} />
        {text ? (
          <p className={keepTextOnSmallScreen ? "flex" : "hidden md:flex"}>
            &nbsp;{text}
          </p>
        ) : null}
      </Button>
    );
  }
);

ButtonIconAndText.displayName = "ButtonWithIconAndText";

export default ButtonIconAndText;
