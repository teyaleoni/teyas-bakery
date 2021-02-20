import React, { useState } from 'react';
import './Accordion.css';
import ShapeContent from './ShapeContent';
import SizeContent from './SizeContent';
import TiersContent from './TiersContent';
import FlavorContent from './FlavorContent';
import FillingsContent from './FillingsContent';
import CakeDecorationsContent from './CakeDecorationsContent';
import CakeBoardsBoxesContent from './CakeBoardsBoxesContent';
import PartyAddOnsContent from './PartyAddOnsContent';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    { title: 'Shape', Content: ShapeContent },
    { title: 'Size', Content: SizeContent },
    { title: 'Tiers', Content: TiersContent },
    { title: 'Flavor', Content: FlavorContent },
    { title: 'Fillings', Content: FillingsContent },
    { title: 'Cake Decorations', Content: CakeDecorationsContent },
    { title: 'Cake Boards and Boxes', Content: CakeBoardsBoxesContent },
    { title: 'Party Add-ons', Content: PartyAddOnsContent },
  ];

  return (
    <ul className="accordion">
      {categories.map(({ title, Content }, index) => (
        <li
          className={`category ${index === activeIndex ? 'active' : ''}`}
          onClick={() => {
            setActiveIndex(index);
          }}
          key={title}
        >
          <div className="title">{title}</div>
          <div className={index === activeIndex ? 'show' : 'hide'}>
            <Content />
          </div>
        </li>
      ))}
    </ul>
  );
}
export default Accordion;
