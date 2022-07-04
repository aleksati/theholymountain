import React from "react";

const Button = React.forwardRef(({ onClick, children, colorStyle }, ref) => {
  const color = colorStyle
    ? colorStyle
    : "border-gray-300 dark:border-gray-600 hover:border-black hover:dark:border-white";
  return (
    <button
      onClick={onClick}
      className={`p-3 flex bg-opacity-0 border ${color} rounded-full transistion ease-in-out duration-200`}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
