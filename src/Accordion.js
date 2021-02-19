import React, { useState } from "react";
import "./Accordion.css";
import ShapeContent from "./ShapeContent";

function SizeContent() {
  return (
    <div>
      <div>
        SHEET
        <div>
          <button>2" MINI</button>
          <button>9" x 13"</button>
          <button>10" x 15"</button>
        </div>
      </div>
      <div>
        ROUND
        <div>
          <button>2" MINI</button>
          <button>6"</button>
          <button>8"</button>
          <button>10"</button>
        </div>
      </div>
      <div>
        SQUARE
        <div>
          <button>8"</button>
          <button>9"</button>
        </div>
      </div>
    </div>
  );
}

function TiersContent() {
  return (
    <div>
      <div>
        <button>YES</button>
        <button>NO</button>
      </div>
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
