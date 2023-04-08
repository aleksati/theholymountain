export const Tooltip = ({ message, children }) => {
  return (
    <div
      className="relative inline-block group"
      aria-label={message}
      role="tooltip"
    >
      {children}
      <div
        className={`absolute z-20 -mb-9 !bg-primary-light !dark:bg-primary-dark bottom-0 flex flex-col text-sm text-center invisible -ml-1 opacity-0 group-hover:animate-tooltip_show`}
      >
        <span className="relative p-2 leading-none opacity-100">{message}</span>
      </div>
    </div>
  );
};

export default Tooltip;
