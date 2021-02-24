import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as atoms from './atoms';

const FLAVOR_OPTIONS = ['Vanilla', 'Chocolate', 'Carrot', 'Banana'];

function FlavorContent() {
  const [flavor, setFlavor] = useRecoilState(atoms.flavor);
  const [topTierflavor, setTopFlavor] = useRecoilState(atoms.topFlavor);
  const [baseTierflavor, setBottomFlavor] = useRecoilState(atoms.baseFlavor);
  const tier = useRecoilValue(atoms.tier);
  return (
    <div>
      {tier === 'NO' && (
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
        </div>
      )}
      {tier === 'YES' && (
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
      )}
    </div>
  );
}

export default FlavorContent;
