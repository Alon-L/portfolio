export const UPDATE_FIELD = 'UPDATE_FIELD';

interface UpdateFieldAction {
  type: typeof UPDATE_FIELD;
  payload: string;
}

export type BarActionTypes =
  | UpdateFieldAction;
