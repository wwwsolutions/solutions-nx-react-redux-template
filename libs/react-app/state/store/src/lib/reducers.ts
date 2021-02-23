import { combineReducers } from 'redux';

// REDUCERS
import { repositoriesReducer } from '@redux/reducers';
//...

// CREATE A ROOT REDUCER/STATE FROM SLICES
export const reducers = combineReducers({
  repositories: repositoriesReducer,
  // examples: examplesReducer,
  // anotherExamples: anotherExamplesReducer,
});
