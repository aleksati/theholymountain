import React from "react";

const PageTitle = ({ title }) => (
  <h1
    aria-label="Media page title"
    className="mt-4 mb-4 overflow-hidden font-normal text-center text-clip text-size-header-big sm:text-size-header-big"
  >
    <b>{title.toUpperCase()}</b>
  </h1>
);

export default PageTitle;
