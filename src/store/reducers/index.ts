import { combineReducers } from 'redux';
import { hero } from './home/hero';
import { webpSupported } from './webpSupported';

export const rootReducer = combineReducers({
  homeHero: hero,
  webpSupported,
});
