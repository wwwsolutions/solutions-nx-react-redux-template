import { combineReducers } from 'redux';

// REDUCERS
import { repositoriesReducer } from '@redux/reducers';
//...

// CREATE A 'ROOT' REDUCER FROM 'SLICE' REDUCERS
export const reducers = combineReducers({
  repositories: repositoriesReducer,
  //...
});
