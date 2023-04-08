// must have parent with className relative to work

const TextOverImageFullscreen = ({ children, className }) => (
  <div
    className={`absolute justify-center inset-0 flex flex-col container text-center mx-auto items-center space-y-4 ${className}`}
  >
    {/* justity-center */}
    {children}
  </div>
);

export default TextOverImageFullscreen;
