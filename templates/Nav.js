import ControlsPageMedia from "../components/ControlsPageMedia";
import ButtonTo from "../components/ButtonTo";
import NavMenu from "../components/NavMenu";
import { useState } from "react";

// on mobile, The menubar should go downwards?
const Nav = ({
  onTabClick,
  activeTab,
  tabs = [""],
  showMediaTabControls = false,
  showBackButton = false,
  showMenu = false,
}) => {
  const [menuIsActive, setMenuIsActive] = useState();

  return (
    <nav className="z-50" aria-label="Navbar" role="toolbar">
      <div className="container grid grid-cols-3 p-4 pb-0 mx-auto">
        <div>
          {showBackButton ? (
            <ButtonTo path="/" icon="prevArrow" text="home" />
          ) : null}
        </div>
        <div className="flex items-center justify-center w-100">
          {showMediaTabControls ? (
            <ControlsPageMedia
              tabs={tabs}
              onTabClick={onTabClick}
              activeTab={activeTab}
              menuIsActive={menuIsActive}
            />
          ) : null}
        </div>
        {showMenu ? <NavMenu isActive={(val) => setMenuIsActive(val)} /> : null}
      </div>
    </nav>
  );
};

export default Nav;
