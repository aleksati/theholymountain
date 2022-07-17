import React from "react";

const PageMediaTitle = ({ title }) => (
  <h1
    aria-label="Media page title"
    className="mt-4 overflow-hidden text-center text-clip text-size-header sm:text-size-header-big"
  >
    <b>{title.toUpperCase()}</b>
  </h1>
);

export default PageMediaTitle;
