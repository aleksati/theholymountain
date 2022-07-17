import React from "react";

const PageMediaGrid = ({ children }) => {
  return (
    <div
      className={`grid grid-cols-1 gap-6 p-4 lg:grid-cols-3 sm:grid-cols-2`}
      role="grid"
      aria-label="Media grid"
    >
      {children}
    </div>
  );
};

export default PageMediaGrid;
