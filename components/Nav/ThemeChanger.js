import Button from "../Button";

const ThemeChanger = () => {
  const renderThemeChanger = () => {
    return (
      <Button className="bg-ternary-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </Button>
    );
  };

  return <div>{renderThemeChanger()}</div>;
};

export default ThemeChanger;
