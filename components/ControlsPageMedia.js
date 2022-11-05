// import ButtonIconAndText from "./ButtonIconAndText";
// import getCurrTheme from "../functions/getCurrTheme";

const ControlsPageMedia = ({ onClick, filters, activeFilters }) => {
  // const { currTheme } = getCurrTheme();
  // const color =
  //   currTheme === "dark"
  //     ? "!bg-button-filter-light"
  //     : "!bg-button-filter-light";

  return (
    <div className="flex items-center justify-center p-4 space-x-4 text-3xl">
      {filters.map(filter => {
        let underline = activeFilters.includes(filter) ? "underline" : "";
        return (
          <a
            key={filter}
            onClick={() => onClick(filter)}
            className={"hover:underline cursor-pointer " + underline}
            tabIndex="0"
          >
            {filter}
          </a>
        );
        // <ButtonIconAndText
        //   key={filter}
        //   keepTextOnSmallScreen={true}
        //   text={filter}
        //   className={activeFilters.includes(filter) ? color : ""}
        //   onClick={() => onClick(filter)}
        // />
      })}
    </div>
  );
};

export default ControlsPageMedia;
