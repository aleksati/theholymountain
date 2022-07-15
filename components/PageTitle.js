import React from "react";

const PageTitle = ({ title }) => (
  <h1 className="mt-4 overflow-hidden text-center text-clip text-size-header sm:text-size-header-big">
    <b>{title.toUpperCase()}</b>
  </h1>
);

export default PageTitle;
