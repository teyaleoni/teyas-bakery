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

  return (
    <div>
      <div>
        Flags
        <ul>
          {flags.map((flag) => (
            <li key={flag.id}>
              <button>{flag.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Candles
        <ul>
          {candles.map((candle) => (
            <li key={candle.id}>
              <button>{candle.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Cutlery
        <ul>
          {cutlery.map((cutleryOption) => (
            <li key={cutleryOption.id}>
              <button>{cutleryOption.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Plates
        <ul>
          {plates.map((plate) => (
            <li key={plate.id}>
              <button>{plate.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Napkins
        <ul>
          {napkins.map((napkin) => (
            <li key={napkin.id}>
              <button>{napkin.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Balloons
        <ul>
          {balloons.map((balloon) => (
            <li key={balloon.id}>
              <button>{balloon.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CakeBoardsBoxesContent;
