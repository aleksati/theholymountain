import { useTheme } from "next-themes";

const getCurrTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;
  setTheme("dark"); // force dark mode
  return { currTheme, setTheme };
};

export default getCurrTheme;
