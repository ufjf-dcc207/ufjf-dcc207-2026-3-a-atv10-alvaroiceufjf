import type { GameState, GameAction } from './types';
import { INITIAL_STAGE } from './constants';

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SELECT_BOTTLE': {
      const targetIndex = action.index;
      const { selectedBottleIndex, bottles } = state;

     
      if (selectedBottleIndex === null) {
        if (bottles[targetIndex].length > 0) {
          return { ...state, selectedBottleIndex: targetIndex };
        }
        return state;
      }

      if (selectedBottleIndex === targetIndex) {
        return { ...state, selectedBottleIndex: null };
      }

      return state;
    }

    case 'RESET_STAGE':
      return INITIAL_STAGE;

    default:
      return state;
  }
}