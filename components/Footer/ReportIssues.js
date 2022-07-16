import React from "react";
import Button from "../Button";

const ReportIssues = ({ visibility }) => (
  <Button
    className={`-mt-1 ${visibility}`}
    aria-label={`Report page issues`}
    aria-hidden={visibility.length ? "true" : "false"}
  >
    <a role="link" href="https://github.com/aleksati">
      Report issues
    </a>
  </Button>
);

export default ReportIssues;
