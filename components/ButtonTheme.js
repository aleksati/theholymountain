import { useState, useEffect } from "react";
import getCurrTheme from "../utils/getCurrTheme";
import ButtonIconAndText from "./ButtonIconAndText";

const ButtonTheme = ({ tabOrder }) => {
  const [mounted, setMounted] = useState(false);
  const { currTheme, setTheme } = getCurrTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () =>
    currTheme === "dark" ? setTheme("light") : setTheme("dark");

  if (!mounted) return null;

  return (
    <ButtonIconAndText
      text="Theme"
      pressed={currTheme === "dark" ? "true" : "false"}
      label="Toggle light or dark mode theme"
      iconId={currTheme === "dark" ? "sun" : "moon"}
      tabOrder={tabOrder}
      onClick={handleClick}
    />
  );
};

export default ButtonTheme;
