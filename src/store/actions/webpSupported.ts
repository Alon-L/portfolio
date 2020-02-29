import { Dispatch } from 'redux';
import {
  WebpSupportedActionTypes,
  SET_WEBP_SUPPORTED
} from '../types/webpSupported';

export type dispatchCurrying = (dispatch: Dispatch) => WebpSupportedActionTypes;

export const setWebpSupported = (supported: boolean): dispatchCurrying => (
  dispatch: Dispatch
): WebpSupportedActionTypes => {
  return dispatch({
    type: SET_WEBP_SUPPORTED,
    payload: supported,
  });
};
