import React, { useState } from "react";
import "./App.css";
import Box from "./box";

function App() {
  const [shape, setShape] = useState(null);
  const [color, setColor] = useState(null);
  const [showElement, setShowElement] = useState(false);

  return (
    <div className="App">
      <div>
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
      </div>
    </div>
  );
}
export default App;
