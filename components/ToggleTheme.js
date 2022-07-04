import { useState, useEffect } from "react";
import Button from "./Button";
import getCurrTheme from "../utils/getCurrTheme";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ToggleTheme = ({ iconSize }) => {
  const [mounted, setMounted] = useState(false);
  const { currTheme, setTheme } = getCurrTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () =>
    currTheme === "dark" ? setTheme("light") : setTheme("dark");

  if (!mounted) return null;

  return (
    <Button onClick={handleClick}>
      {currTheme === "dark" ? (
        <BsFillSunFill className={iconSize} />
      ) : (
        <BsFillMoonFill className={iconSize} />
      )}
    </Button>
  );
};

export default ToggleTheme;
