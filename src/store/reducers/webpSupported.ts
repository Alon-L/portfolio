import { SET_WEBP_SUPPORTED, WebpSupportedActionTypes } from '../types/webpSupported';

export type WebpSupportedInitialState = boolean;

const initialState: WebpSupportedInitialState = true;

export function webpSupported(
  state = initialState,
  action: WebpSupportedActionTypes
): WebpSupportedInitialState {
  switch (action.type) {
    case SET_WEBP_SUPPORTED:
      return action.payload;
    default:
      return state;
  }
}
