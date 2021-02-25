import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { middleware } from './middleware';
import { reducers } from './reducers';
import { actionCreators } from './action-creators';

// CONFIGURE DEVTOOLS
const composeEnhancers = composeWithDevTools({
  actionCreators,
  trace: true,
  traceLimit: 25,
});

// CREATE STORE
export const store = createStore(
  reducers, // root reducer
  {}, // preloadedState
  composeEnhancers(applyMiddleware(...middleware))
);
