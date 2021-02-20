import React from 'react';

// All options will be preset picture options
// Right now they will just be buttons

function CakeBoardsBoxesContent() {
  const flags = [
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
  ];
  const candles = [
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
  ];

  const cutlery = [
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
  ];
  const plates = [
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
  ];
  const napkins = [
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
  ];
  const balloons = [
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
    { title: 'Option' },
  ];

  const boxes = [{ title: 'Option' }, { title: 'Option' }, { title: 'Option' }];

  return (
    <div>
      <div>
        Flags
        <ul>
          {flags.map((flag, index) => (
            <li key={index}>
              <button>{flag.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Candles
        <ul>
          {candles.map((candle, index) => (
            <li key={index}>
              <button>{candle.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Cutlery
        <ul>
          {cutlery.map((cutleryOption, index) => (
            <li key={index}>
              <button>{cutleryOption.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Plates
        <ul>
          {plates.map((plate, index) => (
            <li key={index}>
              <button>{plate.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Napkins
        <ul>
          {napkins.map((napkin, index) => (
            <li key={index}>
              <button>{napkin.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Balloons
        <ul>
          {balloons.map((balloon, index) => (
            <li key={index}>
              <button>{balloon.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CakeBoardsBoxesContent;
