/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as atoms from './atoms';

const SIZE_OPTIONS_MAP = {
  Sheet: ['2" MINI', '9" x 13"', '10" x 15"'],
  Round: ['2" MINI', '6"', '8"', '10"'],
  Square: ['8"', '9"'],
};

function SizeContent() {
  const shape = useRecoilValue(atoms.shape);
  const sizeOptionsForShape = SIZE_OPTIONS_MAP[shape] ?? [];
  const [size, setSize] = useRecoilState(atoms.size);

  return (
    <div>
      {sizeOptionsForShape.map((option) => (
        <button
          className={size === option ? 'selected' : ''}
          onClick={() => setSize(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default SizeContent;
