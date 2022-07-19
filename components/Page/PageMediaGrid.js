import React, { useEffect, useState } from "react";

const PageMediaGrid = ({ children, maxGridCols }) => {
  const cols = () => "2xl:grid-cols-" + maxGridCols;

  return (
    <div
      className={`grid grid-cols-1 gap-4 p-4 lg:grid-cols-3 ${cols()} sm:grid-cols-2`}
      role="grid"
      aria-label="Media grid"
    >
      {children}
    </div>
  );
};

export default PageMediaGrid;
