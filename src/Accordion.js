import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import './Accordion.css';
import * as atoms from './atoms';
import CakeBoardsBoxesContent from './CakeBoardsBoxesContent';
import CakeDecorationsContent from './CakeDecorationsContent';
import FillingsContent from './FillingsContent';
import FlavorContent from './FlavorContent';
import PartyAddOnsContent from './PartyAddOnsContent';
import ShapeContent from './ShapeContent';
import SizeContent from './SizeContent';
import TiersContent from './TiersContent';

function Accordion() {
  const [activeIndex, setActiveIndex] = useRecoilState(atoms.activeIndex);
  const tier = useRecoilValue(atoms.tier);

  const categories = [
    { title: 'Shape', Content: ShapeContent },
    { title: 'Size', Content: SizeContent },
    { title: 'Tiers', Content: TiersContent },
    { title: `Flavor${tier === 'YES' ? 's' : ''}`, Content: FlavorContent },
    { title: 'Filling', Content: FillingsContent },
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
