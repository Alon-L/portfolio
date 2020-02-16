import { combineReducers } from 'redux';
import { bar } from './bar';
import { hero } from './home/hero';

export const rootReducer = combineReducers({
  foo: bar,
  homeHero: hero,
});
