import React from "react";
import Tooltip from "../components/Tooltip";

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
      : "border-gray-300 dark:border-gray-600 hover:border-black hover:dark:border-white";

    const renderLink = () => (
      <button
        ref={ref}
        onClick={onClick}
        className={`p-3 flex items-center bg-primary-light dark:bg-primary-dark border ${color} rounded-full transistion ease-in-out duration-200 ${className}`}
        type={btnType ? btnType : "button"}
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
