const LayoutReleaseCardToggles = ({ children }) => (
  <div className="absolute inset-0 flex items-center justify-center transition duration-200 ease-in-out rounded-md shadow-md opacity-0 group-hover:opacity-100 backdrop-brightness-75">
    <div className="flex space-x-2 text-size-regular">{children}</div>
  </div>
);

export default LayoutReleaseCardToggles;
