import React, { useState } from "react";
import "./Accordion.css";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    { title: "Shape" },
    { title: "Size" },
    { title: "Tiers" },
    { title: "Sponge" },
    { title: "Fillings" },
    { title: "Buttercream" },
    { title: "Cake Board" },
    { title: "Decorations" },
    { title: "Party Add-ons" },
  ];

  return (
    <ul className={"Accordion"}>
      {categories.map((category, index) => (
        <li
          className={`category ${index === activeIndex ? "active" : ""}`}
          onClick={() => {
            setActiveIndex(index);
          }}
        >
          {category.title}
        </li>
      ))}
    </ul>
  );
}
export default Accordion;
