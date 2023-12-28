import getCurrTheme from "../functions/getCurrTheme";
import ButtonIconAndText from "./ButtonIconAndText";

const ButtonTheme = ({ tabOrder, iconSize }) => {
  const { currTheme, setTheme } = getCurrTheme();

  const handleClick = () =>
    currTheme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <div className="flex items-center justify-center">
      <ButtonIconAndText
        pressed={currTheme === "dark" ? "true" : "false"}
        label="Toggle light or dark mode theme"
        iconId={currTheme === "dark" ? "sun" : "moon"}
        tabOrder={tabOrder}
        onClick={handleClick}
        hasTooltip={true}
        tooltipText="theme"
      />
    </div>
  );
};

export default ButtonTheme;
