const NavButton = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`p-2 hover:scale-105 ${className}`}>
      {children}
    </button>
  );
};

export default NavButton;

{
  /* <button
onClick={onClick}
className={`p-2 rounded-md hover:ring-1 hover:ring-primary-light dark:hover:ring-primary-dark ${className}`}
>
{children}
</button> */
}
