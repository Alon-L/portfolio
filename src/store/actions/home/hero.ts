import { Dispatch } from 'redux';
import {
  HomeActionTypes,
  ADD_LETTER, SET_COL
} from '../../types/home/hero';
import { HomeHeroCol, Letter } from '../../types';

export type dispatchCurrying = (dispatch: Dispatch) => HomeActionTypes;

export const addLetter = (letter: Letter): dispatchCurrying => (
  dispatch: Dispatch
): HomeActionTypes => {
  return dispatch({
    type: ADD_LETTER,
    payload: letter,
  });
};

export const setPrimaryCol = (col: HomeHeroCol): dispatchCurrying => (
  dispatch: Dispatch
): HomeActionTypes => {
  return dispatch({
    type: SET_COL,
    payload: col,
  });
};
