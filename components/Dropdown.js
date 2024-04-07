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
        className="hover:cursor-pointer w-32 p-1 hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 flex items-center justify-between border border-secondary-skin-light dark:border-secondary-skin-dark">
        {/* filler below */}
        <div></div>
        <div>
          <p>{useSelected ? "Size " + useSelected : type}</p>
        </div>
        <div className="mt-1 mr-1">
          <Icon id="downArrow" iconSize="text-sm" />
        </div>
      </div>
      <div
        id="dropdown"
        className={`${
          isActive ? "absolute" : "hidden"
        } w-32 bg-primary-light dark:bg-primary-dark`}>
        <ul>
          {items.map((item) => (
            <li
              className="hover:cursor-pointer border border-secondary-skin-light dark:border-secondary-skin-dark p-1 mt-1 text-center hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200"
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
