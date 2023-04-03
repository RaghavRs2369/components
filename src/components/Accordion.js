import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

// ---------------------------------------------------------

export default function Accordion({ items }) {
  const [expandedIndx, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    console.log('STALE Version Of expandedIndex', expandedIndx);
    setExpandedIndex((currentExpandedIndex) => {
      console.log('UP TO DATE version', currentExpandedIndex)
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndx;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>

        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}
