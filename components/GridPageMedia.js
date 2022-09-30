import React, { useEffect, useState } from "react";

const GridPageMedia = ({ children, maxGridCols }) => {
  const [cols, setCols] = useState("lg:grid-cols-3");

  useEffect(() => {
    setCols("lg:grid-cols-" + maxGridCols);
  }, [maxGridCols]);

  return (
    <div
      className={`grid gap-4 grid-cols-1 md:grid-cols-2 ${cols} p-4`}
      aria-label="Media page grid"
    >
      {children}
    </div>
  );
};

export default GridPageMedia;
