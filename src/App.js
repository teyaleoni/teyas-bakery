import React, { useState } from "react";
import "./App.css";

function App() {
  const [shape, setShape] = useState(null);
  const [color, setColor] = useState(null);

  return (
    <div className="App">
      <div className="box">
        <div
          className={color === "blue" ? "selected" : ""}
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </div>
        <div
          className={color === "red" ? "selected" : ""}
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </div>
        <div
          className={color === "yellow" ? "selected" : ""}
          onClick={() => {
            setColor("yellow");
          }}
        >
          Yellow
        </div>
        <div
          className={shape === "round" ? "selected" : ""}
          onClick={() => {
            setShape("round");
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
