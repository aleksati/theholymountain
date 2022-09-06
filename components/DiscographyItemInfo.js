import React from "react";

const DiscographyItemInfo = ({ title, category, year }) => (
  <div className="text-center">
    <h2 className="font-normal leading-8 text-size-title">
      {title.toUpperCase()}
    </h2>
    <p className="text-secondary">
      {category} / {year}
    </p>
  </div>
);

export default DiscographyItemInfo;
