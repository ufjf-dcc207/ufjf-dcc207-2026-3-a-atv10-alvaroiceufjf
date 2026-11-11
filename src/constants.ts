import type { GameState } from './types';

export const BOTTLE_CAPACITY = 4;

export const INITIAL_STAGE: GameState = {
  bottles: [
    ['red', 'blue', 'red', 'blue'],
    ['blue', 'red', 'blue', 'red'],
    ['blue', 'red',],
    []
  ],
  selectedBottleIndex: null,
  isWon: false,
};