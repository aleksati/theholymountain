const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onclick}
      className={`p-2 rounded-md hover:ring-2 hover:ring-primary-light ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
