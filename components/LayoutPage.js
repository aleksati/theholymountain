const LayoutPage = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen dark:bg-primary-dark bg-primary-light">
      {children}
    </div>
  );
};

export default LayoutPage;
