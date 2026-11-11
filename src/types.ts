export type Color = string;

export type BottleState = Color[];

export interface GameState {
  bottles: BottleState[];
  selectedBottleIndex: number | null;
  isWon: boolean;
}

export type GameAction =
  | { type: 'SELECT_BOTTLE'; index: number }
  | { type: 'RESET_STAGE' };