import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { middleware } from './middleware';
import { reducers } from './reducers';

// CREATE STORE
export const store = createStore(
  reducers, // root reducer / combined reducers
  {}, // preloadedState
  composeWithDevTools(applyMiddleware(...middleware)) // middleware
);
