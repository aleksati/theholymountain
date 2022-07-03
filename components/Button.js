import React from "react";

const Button = React.forwardRef(({ onClick, children }, ref) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 bg-opacity-0 border border-gray-300 dark:border-gray-600 hover:border-black hover:dark:border-white rounded-full transistion ease-in-out duration-200`}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
