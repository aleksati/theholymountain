const LayoutPage = ({ children, id, className, border = true }) => {
  const borderTop =
    "border-t border-secondary-skin-light dark:border-secondary-skin-dark";
  return (
    <div
      className={`min-h-screen container mx-auto ${
        border ? borderTop : null
      } ${className}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default LayoutPage;
