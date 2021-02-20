import React from 'react';

function FlavorContent() {
  const flavors = [
    { title: 'Vanilla' },
    { title: 'Chocolate' },
    { title: 'Carrot' },
    { title: 'Banana' },
  ];
  return (
    <div>
      <ul>
        {flavors.map((flavor, index) => (
          <li key={index}>
            <button>{flavor.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlavorContent;
