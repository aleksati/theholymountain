import NavTabs from "./NavTabs";

const Nav = ({ showNavTop = false, onToggleNavVertical }) => {
  if (!onToggleNavVertical) {
    return (
      <nav className="z-40 min-h-screen bg-primary-light dark:bg-primary-dark p-4">
        <NavTabs />
      </nav>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${
        showNavTop ? "visible opacity-100" : "invisible opacity-0 delay-300"
      }`}
      aria-hidden={!showNavTop}>
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-black/50"
        aria-label="Close navigation"
        tabIndex={showNavTop ? 0 : -1}
        onClick={onToggleNavVertical}
      />
      <nav
        id="primary-navigation"
        aria-label="Primary navigation"
        className={`absolute inset-y-0 left-0 w-80 max-w-[85vw] transform bg-primary-dark px-8 pt-28 text-primary-dark shadow-xl transition-transform duration-300 ease-in-out ${
          showNavTop ? "translate-x-0" : "-translate-x-full"
        }`}>
        <NavTabs onNavigate={onToggleNavVertical} />
      </nav>
    </div>
  );
};

export default Nav;
