import { HomeHeroCol, Letter } from '../../types';

export const ADD_LETTER = 'ADD_LETTER';
export const RESET_LETTERS = 'RESET_LETTERS';
export const SET_COL = 'SET_COL';

interface AddLetterAction {
  type: typeof ADD_LETTER;
  payload: Letter;
}

interface ResetLettersAction {
  type: typeof RESET_LETTERS;
}

interface SetPrimaryColAction {
  type: typeof SET_COL;
  payload: HomeHeroCol;
}

export type HomeActionTypes =
  | AddLetterAction
  | ResetLettersAction
  | SetPrimaryColAction;
