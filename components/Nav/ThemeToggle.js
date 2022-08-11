import { useState, useEffect } from "react";
import getCurrTheme from "../../utils/getCurrTheme";
import Button from "../Button";
import Icon from "../Icon";

const ThemeToggle = ({ tabOrder }) => {
  const [mounted, setMounted] = useState(false);
  const { currTheme, setTheme } = getCurrTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () =>
    currTheme === "dark" ? setTheme("light") : setTheme("dark");

  if (!mounted) return null;

  return (
    <Button
      onClick={handleClick}
      //   showTooltip={true}
      //   tooltipMessage="Theme"
      className="p-4"
      aria-label={`Toggle light or dark mode theme`}
      aria-pressed={currTheme === "dark" ? "true" : "false"}
      tabOrder={tabOrder}
    >
      {currTheme === "dark" ? <Icon id="sun" /> : <Icon id="moon" />}
    </Button>
  );
};

export default ThemeToggle;
