import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as atoms from './atoms';

const FILLING_GROUPS = [
  ['Buttercream', ['Vanilla', 'Chocolate', 'Cream Cheese']],
  ['Jam', ['Rasberry', 'Strawberry', 'Blueberry']],
  ['Curd', ['Lemon']],
  ['Fruit', ['Seasonal', 'Strawberry']],
  ['Ganache', ['Chocolate', 'White']],
  ['Other', ['Oreo Crumble']],
];

function FillingsContent() {
  const [filling, setFilling] = useRecoilState(atoms.filling);
  const [topTierFilling, setTopFilling] = useRecoilState(atoms.topTierFilling);
  const [baseTierFilling, setBaseFilling] = useRecoilState(
    atoms.baseTierFilling,
  );
  const tier = useRecoilValue(atoms.tier);

  return (
    <div>
      {tier === 'NO' && (
        <div>
          {FILLING_GROUPS.map(([groupName, flavors]) => (
            <div key={groupName}>
              {groupName}
              <ul>
                {flavors.map((flavor) => {
                  const option = `${groupName}:${flavor}`;
                  return (
                    <li key={flavor}>
                      <button
                        className={filling === option ? 'selected' : ''}
                        onClick={() => setFilling(option)}
                      >
                        {flavor}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
      {tier === 'YES' && (
        <div className="tiers">
          <div>
            <h3>Top Tier</h3>
            {FILLING_GROUPS.map(([groupName, flavors]) => (
              <div key={groupName}>
                {groupName}
                <ul>
                  {flavors.map((flavor) => {
                    const option = `${groupName}:${flavor}`;
                    return (
                      <li key={flavor}>
                        <button
                          className={
                            topTierFilling === option ? 'selected' : ''
                          }
                          onClick={() => setTopFilling(option)}
                        >
                          {flavor}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3>Bottom Tier</h3>
            {FILLING_GROUPS.map(([groupName, flavors]) => (
              <div key={groupName}>
                {groupName}
                <ul>
                  {flavors.map((flavor) => {
                    const option = `${groupName}:${flavor}`;
                    return (
                      <li key={flavor}>
                        <button
                          className={
                            baseTierFilling === option ? 'selected' : ''
                          }
                          onClick={() => setBaseFilling(option)}
                        >
                          {flavor}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FillingsContent;
