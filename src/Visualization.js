import React from 'react';
import { useRecoilValue } from 'recoil';
import './App.css';
import * as atoms from './atoms';

export default function Visualization() {
  const shape = useRecoilValue(atoms.shape);
  const size = useRecoilValue(atoms.size);

  return (
    <div className="Visualization">
      <h2>Shape</h2>
      {shape}
      <h2>Size</h2>
      {size}
    </div>
  );
}
