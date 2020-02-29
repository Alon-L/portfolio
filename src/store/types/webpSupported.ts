export const SET_WEBP_SUPPORTED = 'SET_WEBP_SUPPORTED';

interface SetSupportWebpAction {
  type: typeof SET_WEBP_SUPPORTED;
  payload: boolean;
}

export type WebpSupportedActionTypes =
  | SetSupportWebpAction;