import React, { useState } from "react";
import "./App.scss";
// import Box from "./box";

function App() {
  // const [shape, setShape] = useState(null);
  // const [color, setColor] = useState(null);
  // const [showElement, setShowElement] = useState(false);

  const categories = [
    { title: "Shape" },
    { title: "Size" },
    { title: "Tiers" },
    { title: "Sponge" },
    { title: "Fillings" },
    { title: "Buttercream" },
    { title: "Decorations" },
    { title: "Add-ons" },
  ];

  return (
    <div className="App">
      <div className="col-1">
        <div className="header">
          <h1>Customize your Cake</h1>
        </div>
      </div>
      <div className="col-2">
        <div className="accordian">
          <ul className={"categories"}>
            {categories.map((category) => (
              <li className={"category"}>{category.title}</li>
            ))}
          </ul>
        </div>
        <div className="footer"></div>
      </div>
      {/* <div>
        <div>
          <div
            className={color === "blue" ? "selected" : ""}
            onClick={() => {
              setShowElement(!showElement);
            }}
          >
            Blue
          </div>
          {showElement ? <Box /> : false}
        </div>
        <div
          className={color === "red" ? "selected" : ""}
          onClick={() => {
            setColor(color === "red" ? null : "red");
          }}
        >
          Red
        </div>
        <div
          className={color === "yellow" ? "selected" : ""}
          onClick={() => {
            setColor(color === "yellow" ? null : "yellow");
          }}
        >
          Yellow
        </div>
        <div
          className={shape === "round" ? "selected" : ""}
          onClick={() => {
            setShape(shape === "round" ? null : "round");
          }}
        >
          Round
        </div>
        <div
          className={shape === "square" ? "selected" : ""}
          onClick={() => {
            setShape(shape === "square" ? null : "square");
          }}
        >
          Square
        </div>
      </div> */}
    </div>
  );
}
export default App;
