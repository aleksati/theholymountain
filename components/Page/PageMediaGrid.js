import React, { useEffect, useState } from "react";

const PageMediaGrid = ({ children, maxGridCols }) => {
  const [cols, setCols] = useState("2xl:grid-cols-3");

  useEffect(() => {
    setCols("2xl:grid-cols-" + maxGridCols);
  }, [maxGridCols]);

  return (
    <div
      className={`grid grid-cols-1 gap-4 p-4 lg:grid-cols-4 ${cols} sm:grid-cols-2`}
      role="grid"
      aria-label="Media grid"
    >
      {children}
    </div>
  );
};

export default PageMediaGrid;
