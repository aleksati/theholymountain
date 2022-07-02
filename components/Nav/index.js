import ThemeChanger from "./ThemeChanger";

const Nav = () => {
  return (
    <div className="fixed flex space-x-2 right-4 bottom-4">
      <ThemeChanger />
      <div>
        <button className="p-2 border rounded bg-primary-light">About</button>
      </div>
    </div>
  );
};

export default Nav;
