import React from 'react';
import { useRecoilState } from 'recoil';
import * as atoms from './atoms';

const SHAPE_OPTIONS = ['Sheet', 'Round', 'Square'];
function ShapeContent() {
  const [shape, setShape] = useRecoilState(atoms.shape);

  return (
    <div>
      {SHAPE_OPTIONS.map((option) => (
        <button
          className={shape === option ? 'selected' : ''}
          style={{ background: shape === option ? 'green' : '' }}
          onClick={() => setShape(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default ShapeContent;
