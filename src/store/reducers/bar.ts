import {
  BarActionTypes,
  UPDATE_FIELD
} from '../types/bar';
import { Bar } from '../types';

const initialState: Bar = {
  field: 'field'
};

export function bar(
  state = initialState,
  action: BarActionTypes
): Bar {
  switch (action.type) {
    case UPDATE_FIELD:
      return {...state, field: 'updated_field'};
    default:
      return state;
  }
}
