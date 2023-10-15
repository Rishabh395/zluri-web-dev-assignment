import React, { useState } from "react";
import "./dropdown.css";

const Dropdown = ({ onHover, optionsList, level }) => {
  console.log(level);
  let first;
  if (level === "1") {
    first = "Dropdown";
  } else {
    first = "Forest";
  }



  const [select, setselect] = useState(first);
  const [open, setopen] = useState(false);

  const handleClick = () => {
    setopen(!open);
  };

  const handleChange = (item) => {
    setselect(item);
    onHover(item);
  };
  const handleClick2 = (item) => {
    onHover(item);
  };
  return (
    <div>
      <div className="dropdown" value={select} onClick={handleClick}>
        <div
          onClick={() => handleClick2(select)}
          className={open ? "select-open" : "select"}
        >
          <span className={open ? "selected-open" : "selected"}>
            {open ? "Dropdown" : select}
          </span>
          <div className={open ? "pointer-open" : "pointer"}></div>
        </div>
        <ul className={open ? "menu-open" : "menu"}>
          {optionsList.map((item, index) => {
            return (
              <li
                className="item"
                onMouseOver={() => onHover(item)}
                onClick={() => handleChange(item)}
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
