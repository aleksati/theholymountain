const ControlsPageMedia = ({ onTabClick, tabs, activeTab }) => {
  const onKeyDown = (event, tab) => {
    if (event.keyCode === 13) {
      onTabClick(tab);
    }
  };

  return (
    <div className="space-x-4 text-2xl text-primary-light dark:text-primary-dark">
      {tabs.map((tab, index) => {
        let underline = activeTab === tab ? "underline" : "";
        return (
          <a
            key={tab}
            onClick={() => onTabClick(tab)}
            onKeyDown={(event) => onKeyDown(event, tab)}
            className={"hover:underline cursor-pointer " + underline}
            tabIndex={index + 1}>
            {tab}
          </a>
        );
      })}
    </div>
  );
};

export default ControlsPageMedia;
