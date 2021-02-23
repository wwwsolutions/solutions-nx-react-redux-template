import { RepositoriesActionType } from '@redux/action-types';

interface SearchRepositoriesAction {
  type: RepositoriesActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: RepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: RepositoriesActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

// DEFINE ACTION
export type RepositoriesAction =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
