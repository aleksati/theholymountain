import React from "react";
import Tooltip from "./Tooltip";

const Button = React.forwardRef(
  (
    {
      onClick,
      children,
      colorStyle,
      className,
      showTooltip = false,
      tooltipMessage,
      tabOrder,
      props,
      btnType,
    },
    ref
  ) => {
    const color = colorStyle
      ? colorStyle
      : "border-secondary-skin-light dark:border-secondary-skin-dark hover:border-secondary hover:dark:border-secondary";

    const renderLink = () => (
      <button
        ref={ref}
        onClick={onClick}
        className={`p-3 flex items-center bg-primary-light dark:bg-primary-dark border ${color} rounded-full transistion ease-in-out duration-200 ${className}`}
        type={btnType ? btnType : "button"}
        aria-label={tooltipMessage ? tooltipMessage : "button"}
        tabIndex={tabOrder}
        {...props}
      >
        {children}
      </button>
    );

    if (showTooltip) {
      return <Tooltip message={tooltipMessage}>{renderLink()}</Tooltip>;
    }

    return renderLink();
  }
);

Button.displayName = "Button";

export default Button;
