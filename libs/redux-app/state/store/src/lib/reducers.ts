import { combineReducers } from 'redux';

// REDUCERS
import { repositoriesReducer } from '@redux/reducers';
//...

// CREATE A ROOT REDUCER FROM SLICES
export const reducers = combineReducers({
  repositories: repositoriesReducer,
  //...
});
