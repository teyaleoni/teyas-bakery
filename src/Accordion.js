import React, { useState } from "react";
import "./Accordion.css";

function ShapeContent() {
  return (
    <div>
      <button>Sheet</button>
      <button>Round</button>
      <button>Square</button>
    </div>
  );
}

function SizeContent() {
  return (
    <div>
      <div>
        SHEET
        <ul>
          <li>2" MINI</li>
          <li>9" x 13"</li>
          <li>10" x 15"</li>
        </ul>
      </div>
      <div>
        ROUND
        <ul>
          <li>2" MINI</li>
          <li>6"</li>
          <li>8"</li>
          <li>10"</li>
        </ul>
      </div>
      <div>
        SQUARE
        <ul>
          <li>8"</li>
          <li>9"</li>
        </ul>
      </div>
    </div>
  );
}

function TiersContent() {
  return (
    <div>
      <ul>
        <li>YES</li>
        <li>NO</li>
      </ul>
    </div>
  );
}
const Dummy = () => <div>Hello</div>;

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    { title: "Shape", Content: ShapeContent },
    { title: "Size", Content: SizeContent },
    { title: "Tiers", Content: TiersContent },
    { title: "Flavor", Content: Dummy },
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
          key={index}
        >
          <div className="title">{title}</div>
          <div className={index === activeIndex ? "show" : "hide"}>
            <Content />
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Accordion;
