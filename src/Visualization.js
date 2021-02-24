import React from 'react';
import { useRecoilValue } from 'recoil';
import './App.css';
import * as atoms from './atoms';

export default function Visualization() {
  const shape = useRecoilValue(atoms.shape);
  const size = useRecoilValue(atoms.size);
  const tier = useRecoilValue(atoms.tier);
  const flavor = useRecoilValue(atoms.flavor);

  return (
    <div className="Visualization">
      <h2>Shape</h2>
      {shape}
      <h2>Size</h2>
      {size}
      <h2>Tiers</h2>
      {tier}
      <h2>Flavor</h2>
      {flavor}
    </div>
  );
}
