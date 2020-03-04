import { ADD_LETTER, HomeActionTypes, RESET_LETTERS, SET_COL } from '../../types/home/hero';
import { HomeHeroCol, Letters } from '../../types';

export interface HomeHeroInitialState {
  letters: Letters;
  primaryCol: HomeHeroCol;
}

const initialState = {
  letters: [],
  primaryCol: null,
} as HomeHeroInitialState;

export function hero(
  state = initialState,
  action: HomeActionTypes
): HomeHeroInitialState {
  switch (action.type) {
    case ADD_LETTER:
      return {
        ...state,
        letters: [...state.letters, action.payload],
      };
    case RESET_LETTERS:
      state.letters.length = 0;
      return state;
    case SET_COL:
      return {
        ...state,
        primaryCol: action.payload,
      };
    default:
      return state;
  }
}
