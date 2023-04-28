import React, { useState } from "react";
import "./CustomSelect.css";
import "@fortawesome/fontawesome-free/css/all.css";

const CustomSelect = ({ options, onChange, title }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div className="select-box" onClick={() => setIsOpen(!isOpen)}>
        <div className="selected-option">
          {selectedOption ? selectedOption : title}
        </div>
        <div className="dropdown-icon">
          <i className={`fas fa-angle-${isOpen ? "up" : "down"}`}></i>
        </div>
      </div>
      {isOpen && (
        <ul className="options-list">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
