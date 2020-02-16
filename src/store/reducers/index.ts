import { combineReducers } from 'redux';
import { hero } from './home/hero';

export const rootReducer = combineReducers({
  homeHero: hero,
});
