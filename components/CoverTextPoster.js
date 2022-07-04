const CoverTextPoster = ({ children, className }) => (
  <div
    className={`absolute inset-0 flex flex-col items-center justify-center space-y-4 ${className}`}
  >
    {children}
  </div>
);

export default CoverTextPoster;
