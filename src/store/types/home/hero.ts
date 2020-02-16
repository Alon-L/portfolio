import { HomeHeroCol, Letter } from '../../types';

export const ADD_LETTER = 'ADD_LETTER';
export const SET_COL = 'SET_COL';

interface AddLetterAction {
  type: typeof ADD_LETTER;
  payload: Letter;
}

interface SetPrimaryColAction {
  type: typeof SET_COL;
  payload: HomeHeroCol;
}

export type HomeActionTypes =
  | AddLetterAction
  | SetPrimaryColAction;
