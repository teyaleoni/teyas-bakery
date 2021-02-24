import React from 'react';
import { useRecoilValue } from 'recoil';
import './App.css';
import * as atoms from './atoms';

export default function Visualization() {
  const shape = useRecoilValue(atoms.shape);
  const size = useRecoilValue(atoms.size);
  const tier = useRecoilValue(atoms.tier);
  const flavor = useRecoilValue(atoms.flavor);
  const topFlavor = useRecoilValue(atoms.topFlavor);
  const baseFlavor = useRecoilValue(atoms.baseFlavor);

  return (
    <div className="Visualization">
      <h2>Shape</h2>
      {shape}
      <h2>Size</h2>
      {size}
      <h2>Tiers</h2>
      {tier}
      <h2>Flavor{tier === 'YES' && 's'}</h2>
      {/* if user chooses "Tier: Yes" then title should change to "Flavors" instead of "Flavor" */}
      {flavor}
      {tier === 'YES' && (
        <ul>
          <h1>Top Tier</h1>
          <li>{topFlavor}</li>
          <h1>Base Tier</h1>
          <li>{baseFlavor}</li>
        </ul>
      )}
    </div>
  );
}
