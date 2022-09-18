// must have parent with className relative to work

const TextOverImageFullscreen = ({ children, className }) => (
  <div
    className={`absolute inset-0 flex flex-col container text-center mx-auto items-center justify-center space-y-4 ${className}`}
  >
    {children}
  </div>
);

export default TextOverImageFullscreen;