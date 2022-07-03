import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "../Button";

const ThemeToggle = ({ iconSize }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currTheme = theme === "system" ? systemTheme : theme;

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

export default ThemeToggle;
