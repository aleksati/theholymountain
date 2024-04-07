import { useClickOutside } from "../hooks/useClickOutside";
import { useEffect, useState } from "react";
import Icon from "./Icon";

export const Dropdown = ({ items, onSelected, itemKey, type }) => {
  const [useSelected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [dropdownRef, isClickOutside] = useClickOutside();

  useEffect(() => {
    if (isClickOutside) {
      setIsActive(false);
    }
  }, [isClickOutside]);

  const handleMenuClick = () => setIsActive((prevState) => !prevState);

  const handleItemClick = (e) => {
    const selected = e.target.innerHTML || "";
    setSelected(selected);
    onSelected({ key: itemKey, size: selected });
    setIsActive(false);
  };

  return (
    <div className="text-sm z-60" ref={dropdownRef}>
      <div
        onClick={handleMenuClick}
        className="hover:cursor-pointer w-24 p-1 flex text-secondary items-center justify-between border border-secondary-skin-light dark:border-secondary-skin-dark">
        {/* filler below */}
        <div></div>
        <div>
          <p>{useSelected || type}</p>
        </div>
        <div className="mt-1 mr-1">
          <Icon id="downArrow" iconSize="text-sm" />
        </div>
      </div>
      <div
        id="dropdown"
        className={`${
          isActive ? "absolute" : "hidden"
        } border border-secondary-skin-light dark:border-secondary-skin-dark mt-1 w-24 bg-primary-light dark:bg-primary-dark`}>
        <ul>
          {items.map((item) => (
            <li
              className="hover:cursor-pointer border-b border-secondary-skin-light dark:border-secondary-skin-dark p-1 text-center"
              onClick={handleItemClick}
              key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
