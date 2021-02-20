import React from 'react';

function FillingsContent() {
  const buttercreams = [
    { title: 'Vanilla' },
    { title: 'Chocolate' },
    { title: 'Cream Cheese' },
  ];
  const jams = [
    { title: 'Rasberry' },
    { title: 'Strawberry' },
    { title: 'Blueberry' },
  ];
  const curds = [{ title: 'Lemon' }];

  const fruits = [{ title: 'Seasonal' }, { title: 'Strawberry' }];

  const ganaches = [{ title: 'Chocolate' }, { title: 'White' }];

  const others = [{ title: 'Oreo Crumble' }];

  return (
    <div>
      <div>
        Buttercream
        <ul>
          {buttercreams.map((buttercream, index) => (
            <li key={index}>
              <button>{buttercream.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Jam
        <ul>
          {jams.map((jam, index) => (
            <li key={index}>
              <button>{jam.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Curd
        <ul>
          {curds.map((curd, index) => (
            <li key={index}>
              <button>{curd.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Fruit
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>
              <button>{fruit.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Ganache
        <ul>
          {ganaches.map((ganache, index) => (
            <li key={index}>
              <button>{ganache.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        Others
        <ul>
          {others.map((other, index) => (
            <li key={index}>
              <button>{other.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FillingsContent;
