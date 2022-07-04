export const Tooltip = ({ message, children }) => (
  <div className="relative flex flex-col items-center group">
    {children}
    <div className="absolute bottom-0 flex-col items-center hidden mb-6 transition duration-300 ease-in-out group-hover:flex">
      <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 rounded-md shadow-lg">
        {message}
      </span>
      <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></div>
    </div>
  </div>
);

export default Tooltip;
