import ControlsPageMedia from "../components/ControlsPageMedia";
import NavMenuMobile from "../components/NavMenuMobile";
import isTouchDevice from "../hooks/isTouchDevice";
import useWindowSize from "../hooks/useWindowSize";
import ButtonTo from "../components/ButtonTo";
import NavMenu from "../components/NavMenu";

const mobileThreshold = 768; // in px

const aboutModalProps = {
  iconId: "about",
  hasTooltip: true,
  tooltipText: "about",
  label: "About Us",
  modalMaxSize: "max-w-md", //   modalMaxSize: "max-w-sm sm:max-w-xl",
  tabOrder: "6",
};

const contactModalProps = {
  iconId: "contact",
  hasTooltip: true,
  tooltipText: "contact",
  label: "Contact Us",
  modalMaxSize: "max-w-md",
  tabOrder: "5",
};

// on mobile, The menubar should go downwards?
const Nav = ({
  onTabClick,
  activeTab,
  tabs = [""],
  showMediaTabControls = false,
  showBackButton = false,
  showMenu = false,
}) => {
  const isMobile = isTouchDevice();
  const { width } = useWindowSize();

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
            />
          ) : null}
        </div>
        {showMenu ? (
          isMobile || width < mobileThreshold ? (
            <NavMenuMobile
              aboutModalProps={aboutModalProps}
              contactModalProps={contactModalProps}
            />
          ) : (
            <NavMenu
              aboutModalProps={aboutModalProps}
              contactModalProps={contactModalProps}
            />
          )
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
