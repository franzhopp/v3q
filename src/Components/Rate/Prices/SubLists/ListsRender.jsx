import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SubList = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleSubList}>
        {" "}
        <IoIosArrowDown className="mt-1" />
      </button>
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubList;
