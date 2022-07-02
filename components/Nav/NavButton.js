import React from "react";

const NavButton = React.forwardRef(({ onClick, className, children }, ref) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 bg-opacity-0 hover:scale-105 ${className}`}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default NavButton;

{
  /* <button
onClick={onClick}
className={`p-2 rounded-md hover:ring-1 hover:ring-primary-light dark:hover:ring-primary-dark ${className}`}
>
{children}
</button> */
}
