import React from "react";

const LayoutPage = React.forwardRef(
  ({ children, id, className, border = true }, ref) => {
    const borderTop =
      "border-t border-secondary-skin-light dark:border-secondary-skin-dark";
    return (
      <div
        className={`min-h-screen container mx-auto ${
          border ? borderTop : null
        } ${className}`}
        id={id}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default LayoutPage;
