import { HomeHeroInitialState } from './reducers/home/hero';
import { WebpSupportedInitialState } from './reducers/webpSupported';

export interface StoreState {
  homeHero: HomeHeroInitialState;
  webpSupported: WebpSupportedInitialState;
}
