import React, { useState } from "react";
import "./Accordion.css";

function ShapeContent() {
  return <p>Shape!</p>;
}
const Dummy = () => <div>This is just a dummy content component</div>;

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    { title: "Shape", Content: ShapeContent },
    { title: "Size", Content: Dummy },
    { title: "Tiers", Content: Dummy },
    { title: "Flavor", Content: Dummy },
    { title: "Buttercream", Content: Dummy },
    { title: "Fillings", Content: Dummy },
    { title: "Cake Decorations", Content: Dummy },
    { title: "Cake Boards/Cake Boxes", Content: Dummy },
    { title: "Party Add-ons", Content: Dummy },
  ];

  return (
    <ul className={"accordion"}>
      {categories.map(({ title, Content }, index) => (
        <li
          className={`category ${index === activeIndex ? "active" : ""}`}
          onClick={() => {
            setActiveIndex(index);
          }}
        >
          {title}
          <div className={index === activeIndex ? "show" : "hide"}>
            <Content />
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Accordion;
