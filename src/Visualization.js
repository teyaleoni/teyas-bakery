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
  const filling = useRecoilValue(atoms.filling);
  const topTierFilling = useRecoilValue(atoms.topTierFilling);
  const baseTierFilling = useRecoilValue(atoms.baseTierFilling);
  const [fillingType, fillingFlavor] = (filling ?? '').split(':');
  return (
    <div className="Visualization">
      <h2>Shape</h2>
      {shape}
      <h2>Size</h2>
      {size}
      <h2>Tiers</h2>
      {tier}
      <h2>Flavor{tier === 'YES' && 's'}</h2>
      {flavor}
      {tier === 'YES' && (
        <ul>
          <h1>Top Tier</h1>
          <li>{topFlavor}</li>
          <h1>Base Tier</h1>
          <li>{baseFlavor}</li>
        </ul>
      )}
      <h2>Filling{tier === 'YES' && 's'}</h2>
      <h3>{fillingType}</h3>
      {fillingFlavor}
      {tier === 'YES' && (
        <ul>
          <h1>Top Tier</h1>
          <li>{topTierFilling}</li>
          <h1>Base Tier</h1>
          <li>{baseTierFilling}</li>
        </ul>
      )}
    </div>
  );
}
