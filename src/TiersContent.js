import React from 'react';
import { useRecoilState } from 'recoil';
import * as atoms from './atoms';

const TIER_OPTIONS = ['YES', 'NO'];
function TiersContent() {
  const [tier, setTiers] = useRecoilState(atoms.tier);
  return (
    <div>
      {TIER_OPTIONS.map((option) => (
        <button
          className={tier === option ? 'selected' : ''}
          style={{ background: tier === option ? 'green' : '' }}
          onClick={() => setTiers(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default TiersContent;
