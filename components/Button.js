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
      props,
    },
    ref
  ) => {
    const color = colorStyle
      ? colorStyle
      : "border-gray-300 dark:border-gray-600 hover:border-black hover:dark:border-white";

    const renderLink = () => (
      <button
        onClick={onClick}
        className={`p-3 flex bg-primary-light dark:bg-primary-dark border ${color} rounded-full transistion ease-in-out duration-200 ${className}`}
        ref={ref}
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

export default Button;
