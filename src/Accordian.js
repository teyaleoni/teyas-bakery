import React, { useState } from "react";
import "./Accordian.css";

function Accordian() {
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
    <div className="accordian">
      <ul className={"categories"}>
        {categories.map((category) => (
          <li className={"category"}>{category.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Accordian;
