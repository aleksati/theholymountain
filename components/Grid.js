// import React from "react";

const Grid = ({ children, className = "" }) => {
  // if (gridCols === 3)
    return (
      <div
        className={`p-2 grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${className}`}
        aria-label="Media page grid">
        {children}
      </div>
    );
  // if (gridCols === 2)
  //   return (
  //     <div
  //       className="p-2 grid grid-cols-1 md:grid-cols-2"
  //       aria-label="Media page grid">
  //       {children}
  //     </div>
  //   );

  // return (
  //   <div className="p-2 grid grid-cols-1" aria-label="Media page grid">
  //     {children}
  //   </div>
  // );
};

export default Grid;
