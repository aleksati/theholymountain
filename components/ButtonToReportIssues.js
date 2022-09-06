import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

const ButtonToReportIssues = () => {
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

export default ButtonToReportIssues;
