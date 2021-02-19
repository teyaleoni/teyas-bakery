import React from "react";

// Rough draft of options.
// Keep in mind of different cake combinations and what preset options there can be

function FillingsContent() {
  const baseButtercream = [
    { title: "Vanilla" },
    { title: "Chocolate" },
    { title: "Cream Cheese" },
  ];

  //   If they chose "Tiered" then there has to be another option category to choose the color of each tier
  const baseButtercreamColor = [
    { title: "white" },
    { title: "brown" },
    { title: "blue" },
    { title: "pink" },
    { title: "red" },
  ];

  //   if they choose flowers, another category will show: flower types, flower placement, etc
  //   Or maybe this will just be preset?
  const flowers = [{ title: "yes" }, { title: "no" }];

  //   I think this will have preset options. Ex. the user will have 3 options to choose from.
  const pipingDecorations = [{ title: "yes" }, { title: "no" }];

  const seamPipings = [
    { title: "no thanks" },
    { title: "pipe style" },
    { title: "pipe style" },
    { title: "pipe style" },
  ];

  //   Probably preset options
  const drips = [{ title: "Yes" }, { title: "No" }];

  return (
    <div>
      <div>
        Base Buttercream Flavor
        <ul>
          {baseButtercream.map((baseButtercream, index) => (
            <li key={index}>
              <button>{baseButtercream.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Base Buttercream Color
        <ul>
          {baseButtercreamColor.map((baseColor, index) => (
            <li key={index}>
              <button>{baseColor.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Flowers
        <ul>
          {flowers.map((flower, index) => (
            <li key={index}>
              <button>{flower.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Piping Decorations
        <ul>
          {pipingDecorations.map((pipingDecoration, index) => (
            <li key={index}>
              <button>{pipingDecoration.title}</button>
            </li>
          ))}
        </ul>
        <div>
          Seam Piping
          <ul>
            {seamPipings.map((seamPiping, index) => (
              <li key={index}>
                <button>{seamPiping.title}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        Drip
        <ul>
          {drips.map((drip, index) => (
            <li key={index}>
              <button>{drip.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FillingsContent;
