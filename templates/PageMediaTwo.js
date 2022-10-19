import LayoutPage from "../layouts/LayoutPage";
import GridPageMedia from "../components/GridPageMedia";
import GridItemPageMedia from "../components/GridItemPageMedia";
import ControlsPageMedia from "../components/ControlsPageMedia";
import ButtonScrollTo from "../components/ButtonScrollTo";
import { useEffect, useState, useRef } from "react";

const filters = ["music", "video", "merch"];

const PageMediaTwo = ({ data, children, border = true, pageId }) => {
  const pageRef = useRef(null);
  const [maxGridCols, setMaxGridCols] = useState(3);
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    setActiveFilters(["music"]);
  }, []);

  useEffect(() => {
    if (activeFilters.includes("video")) {
      setMaxGridCols(2);
    } else {
      setMaxGridCols(3);
    }
  }, [activeFilters]);

  const handleClick = (event) => {
    const filter = event;

    // only one filter at a time
    setActiveFilters([filter]);

    // enables you to have more than one filter at the same time.
    // setActiveFilters(prevState =>
    //   prevState.includes(filter)
    //     ? prevState.filter(item => item !== filter)
    //     : [...prevState, filter]
    // );
  };

  return (
    <LayoutPage id={pageId} border={border} ref={pageRef}>
      <ControlsPageMedia
        onClick={handleClick}
        filters={filters}
        activeFilters={activeFilters}
      />
      <GridPageMedia maxGridCols={maxGridCols}>
        {data.map((item) => {
          if (activeFilters.includes(item.type)) {
            return (
              <GridItemPageMedia key={item.key} item={item} type={item.type} />
            );
          }
        })}
      </GridPageMedia>
      {children}
      <ButtonScrollTo targetId={pageId} parentRef={pageRef} />
    </LayoutPage>
  );
};

export default PageMediaTwo;
