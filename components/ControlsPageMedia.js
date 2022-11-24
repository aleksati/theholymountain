const ControlsPageMedia = ({ onTabClick, tabs, activeTab }) => {
  const onKeyDown = (event, tab) => {
    if (event.keyCode === 13) {
      onTabClick(tab);
    }
  };

  return (
    <>
      {tabs.map(tab => {
        let underline = activeTab === tab ? "underline" : "";
        return (
          <a
            key={tab}
            onClick={() => onTabClick(tab)}
            onKeyDown={event => onKeyDown(event, tab)}
            className={"hover:underline cursor-pointer " + underline}
            tabIndex="0"
          >
            {tab}
          </a>
        );
      })}
    </>
  );
};

export default ControlsPageMedia;
