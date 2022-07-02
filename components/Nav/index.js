import ThemeChanger from "./ThemeChanger";
import AboutChanger from "./AboutChanger";

const Nav = () => {
  return (
    <div className="fixed flex space-x-2 right-4 bottom-4">
      <AboutChanger className="bg-opacity-0" />
      <ThemeChanger className="bg-opacity-0" />
    </div>
  );
};

export default Nav;
