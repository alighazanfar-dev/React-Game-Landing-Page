import React, { useEffect } from "react";
import "./style.css";

const SnapScroll = ({ children }) => {
  useEffect(() => {
    const positions = ["start", "center", "end"];
    const listItems = document.querySelectorAll("li");

    const setScrollSnapAlign = (inline, block) => {
      listItems.forEach((item) => {
        item.style.scrollSnapAlign = `${positions[block]} ${positions[inline]}`;
      });
    };

    const setScrollSnapStop = (stop) => {
      listItems.forEach((item) => {
        item.style.scrollSnapStop = stop ? "always" : "normal";
      });
    };

    // Set default values
    setScrollSnapAlign(1, 1); // Center alignment by default
    setScrollSnapStop(false); // Normal snap stop by default
  }, []);

  return (
    <ul className="snap-scroll-list">
      {React.Children.map(children, (child, index) => (
        <li key={index} className="snap-scroll-list-item">
          {child}
        </li>
      ))}
    </ul>
  );
};

export default SnapScroll;
