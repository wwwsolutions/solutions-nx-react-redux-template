import { RepositoriesActionType } from '@redux/action-types';

interface _SearchRepositoriesAction {
  type: RepositoriesActionType.SEARCH_REPOSITORIES;
}

interface _SearchRepositoriesSuccessAction {
  type: RepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface _SearchRepositoriesErrorAction {
  type: RepositoriesActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

// DEFINE ACTION
export type RepositoriesAction =
  | _SearchRepositoriesAction
  | _SearchRepositoriesSuccessAction
  | _SearchRepositoriesErrorAction;
