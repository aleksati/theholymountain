import { useState, useEffect } from "react";
import getCurrTheme from "../utils/getCurrTheme";
import Icon from "./Icon";
import Button from "./Button";

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { currTheme, setTheme } = getCurrTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () =>
    currTheme === "dark" ? setTheme("light") : setTheme("dark");

  if (!mounted) return null;

  return (
    <Button onClick={handleClick} showTooltip={true} tooltipMessage="Theme">
      {currTheme === "dark" ? <Icon id="sun" /> : <Icon id="moon" />}
    </Button>
  );
};

export default ToggleTheme;
