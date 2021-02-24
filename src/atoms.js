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
  default: 'NO',
});

export const flavor = atom({
  key: 'flavor',
  default: null,
});

export const topFlavor = atom({
  key: 'topFlavor',
  default: null,
});

export const baseFlavor = atom({
  key: 'baseFlavor',
  default: null,
});

export const filling = atom({
  key: 'filling',
  default: null,
});
