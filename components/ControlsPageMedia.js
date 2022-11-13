const ControlsPageMedia = ({ onClick, filters, activeFilters }) => {
  const onKeyDown = (event, filter) => {
    if (event.keyCode === 13) {
      onClick(filter);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 space-x-4 text-2xl">
      {filters.map(filter => {
        let underline = activeFilters.includes(filter) ? "underline" : "";
        return (
          <a
            key={filter}
            onClick={() => onClick(filter)}
            onKeyDown={event => onKeyDown(event, filter)}
            className={"hover:underline cursor-pointer " + underline}
            tabIndex="0"
          >
            {filter}
          </a>
        );
      })}
    </div>
  );
};

export default ControlsPageMedia;
