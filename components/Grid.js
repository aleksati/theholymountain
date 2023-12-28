import React, { useEffect, useState } from "react";

const Grid = ({ children, maxGridCols }) => {
  const [cols, setCols] = useState("md:grid-cols-2");

  useEffect(() => {
    setCols("md:grid-cols-" + maxGridCols);
  }, [maxGridCols]);

  return (
    <div
      className={`p-2 grid grid-cols-1 ${cols}`}
      aria-label="Media page grid">
      {children}
    </div>
  );
};

export default Grid;
