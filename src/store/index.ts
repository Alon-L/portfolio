import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const devTools = process.env.NODE_ENV === 'production'
  ? applyMiddleware(thunk)
  : composeWithDevTools(
    applyMiddleware(thunk)
  );

const store: Store = createStore(
  rootReducer,
  devTools
);

export default store;
