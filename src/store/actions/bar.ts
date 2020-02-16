import { Dispatch } from 'redux';
import {
  BarActionTypes,
  UPDATE_FIELD
} from '../types/bar';

export type dispatchCurrying = (dispatch: Dispatch) => BarActionTypes;

export const updateField = (field: string): dispatchCurrying => (
  dispatch: Dispatch
): BarActionTypes => {
  return dispatch({
    type: UPDATE_FIELD,
    payload: field
  });
};
