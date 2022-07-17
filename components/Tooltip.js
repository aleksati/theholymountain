export const Tooltip = ({ message, children, position }) => {
  let orientation;
  switch (position) {
    case "under":
      orientation = "-mb-8";
      break;
    case "over":
      orientation = "mb-12";
      break;
    default:
      orientation = "-mb-8";
  }

  return (
    <div className="relative inline-block group" role="tooltip">
      {children}
      <div
        className={`absolute bottom-0 flex flex-col items-center invisible -ml-1 opacity-0 group-hover:animate-tooltip_show ${orientation}`}
      >
        <span className="relative z-10 p-2 leading-none rounded-md shadow-md opacity-100 dark:bg-primary-dark bg-primary-light text-primary-light dark:text-primary-dark text-size-small">
          {message}
        </span>
        {/* <div className="w-3 h-3 -mt-2 rotate-45 shadow-md z-9 dark:bg-primary-dark bg-primary-light"></div> */}
      </div>
    </div>
  );
};

export default Tooltip;
