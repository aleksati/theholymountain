import React, { useEffect, useState } from "react";

const LayoutNoSSR = ({ children }) => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return <>{isMounted ? children : null}</>;
};

export default LayoutNoSSR;
