import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

const ReportIssues = () => {
  const router = useRouter();
  return (
    <Button
      btnType="link"
      onClick={() =>
        router.push("https://github.com/aleksati/theholymountain/issues")
      }
    >
      Report issues
    </Button>
  );
};

export default ReportIssues;
