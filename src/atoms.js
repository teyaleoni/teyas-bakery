import { atom } from 'recoil';

export const activeIndex = atom({
  key: 'activeIndex',
  default: 0,
});

export const cart = atom({
  key: 'cart',
  default: [],
});

export const shape = atom({
  key: 'shape',
  default: null,
});

export const size = atom({
  key: 'size',
  default: null,
});

export const tier = atom({
  key: 'tier',
  default: null,
});
export const flavor = atom({
  key: 'flavor',
  default: null,
});
