import React from "react";

const PageMediaGrid = ({ maxCols = "", children }) => {
  const cols = maxCols ? maxCols : "3";
  return (
    <div
      className={`grid grid-cols-1 gap-6 p-4 lg:grid-cols-${cols} sm:grid-cols-2`}
    >
      {children}
    </div>
  );
};

export default PageMediaGrid;
