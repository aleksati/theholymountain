export const Tooltip = ({ message, children }) => {
  return (
    <div
      className="relative inline-block group"
      role="tooltip"
      aria-label={message}
    >
      {children}
      <div
        className={`absolute -mb-9 bottom-0 flex flex-col text-sm text-center invisible -ml-1 opacity-0 group-hover:animate-tooltip_show`}
      >
        <span className="relative z-10 p-2 leading-none rounded-md shadow-md opacity-100 dark:bg-primary-dark bg-primary-light text-primary-light dark:text-primary-dark">
          {message}
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
