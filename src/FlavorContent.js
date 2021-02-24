import React from 'react';
import { useRecoilState } from 'recoil';
import * as atoms from './atoms';

// if the user chooses Tiers: Yes
// two options should display: top layer and bottom layer
// each layer will have it's own set of falvor options
// if the user chooses Tiers: No
// only one option of flavors should show

// const FLAVOR_OPTIONS_MAP = {
//   Yes: {
//     topTier: ['Vanilla', 'Chocolate', 'Carrot', 'Banana'],
//     bottomTier: ['Vanilla', 'Chocolate', 'Carrot', 'Banana'],
//   },
//   No: ['Vanilla', 'Chocolate', 'Carrot', 'Banana'],
// };

const FLAVOR_OPTIONS = ['Vanilla', 'Chocolate', 'Carrot', 'Banana'];

function FlavorContent() {
  // const tier = useRecoilValue(atoms.tier);
  // const flavorOptionsForTier = FLAVOR_OPTIONS_MAP[tier] ?? [];
  const [flavor, setFlavor] = useRecoilState(atoms.flavor);
  const [topTierflavor, setTopFlavor] = useRecoilState(atoms.topFlavor);
  const [baseTierflavor, setBottomFlavor] = useRecoilState(atoms.baseFlavor);
  return (
    <div>
      {FLAVOR_OPTIONS.map((option) => (
        <button
          className={flavor === option ? 'selected' : ''}
          style={{ background: flavor === option ? 'green' : '' }}
          onClick={() => setFlavor(option)}
        >
          {option}
        </button>
      ))}
      <div className="tiers">
        <div>
          <h3>Top Tier</h3>
          {FLAVOR_OPTIONS.map((option) => (
            <button
              className={topTierflavor === option ? 'selected' : ''}
              style={{ background: topTierflavor === option ? 'green' : '' }}
              onClick={() => setTopFlavor(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div>
          <h3>Base Tier</h3>
          {FLAVOR_OPTIONS.map((option) => (
            <button
              className={baseTierflavor === option ? 'selected' : ''}
              style={{ background: baseTierflavor === option ? 'green' : '' }}
              onClick={() => setBottomFlavor(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlavorContent;
