import React from "react";
import Button from "./Button";
import Icon from "./Icon";

const ButtonIconAndText = React.forwardRef(
  (
    {
      onClick,
      pressed,
      iconId,
      text,
      hasTooltip,
      tooltipText,
      label,
      tabOrder,
      keepTextOnSmallScreen,
      className,
      onKeyDown,
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
        onKeyDown={onKeyDown}
      >
        <Icon id={iconId} iconSize={"text-md md:text-xl"} />
        {text ? <>&nbsp;{text}</> : null}
      </Button>
    );
  }
);

// iconSize ? iconSize : null

ButtonIconAndText.displayName = "ButtonWithIconAndText";

export default ButtonIconAndText;
