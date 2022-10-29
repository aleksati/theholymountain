import ButtonIconAndText from "./ButtonIconAndText";
import getCurrTheme from "../functions/getCurrTheme";

const ControlsPageMedia = ({ onClick, filters, activeFilters }) => {
  const { currTheme } = getCurrTheme();
  const color =
    currTheme === "dark"
      ? "!bg-button-filter-light"
      : "!bg-button-filter-light";

  return (
    <div className="flex items-center justify-center p-4 space-x-4">
      {filters.map(filter => (
        <ButtonIconAndText
          key={filter}
          keepTextOnSmallScreen={true}
          text={filter}
          className={activeFilters.includes(filter) ? color : ""}
          onClick={() => onClick(filter)}
        />
      ))}
    </div>
  );
};

export default ControlsPageMedia;
