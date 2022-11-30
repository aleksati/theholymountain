import React, { useState, useRef } from "react";
import Meta from "../components/Meta";
import dynamic from "next/dynamic";

const DynNav = dynamic(() => import("../templates/Nav"));
const DynButtonScrollTo = dynamic(() => import("../components/ButtonScrollTo"));

const LayoutPage = ({
  pageMeta,
  className,
  showBackButton = false,
  showMenu = false,
  showMediaTabControls = false,
  pageId = "top",
  children,
}) => {
  const ref = useRef(null);
  const navTabs = ["music", "video"];
  const [activeTab, setActiveTabs] = useState("music");

  const handleTabClick = (event) => setActiveTabs(event);

  return (
    <div
      className={`min-h-screen container mx-auto pb-12 ${className}`}
      id={pageId}
      ref={ref}
    >
      <Meta {...pageMeta} />
      <DynNav
        showMediaTabControls={showMediaTabControls}
        showBackButton={showBackButton}
        onTabClick={handleTabClick}
        activeTab={activeTab}
        showMenu={showMenu}
        tabs={navTabs}
      />
      {children(activeTab)}
      <DynButtonScrollTo targetId={pageId} parentRef={ref} />
    </div>
  );
};

export default LayoutPage;
