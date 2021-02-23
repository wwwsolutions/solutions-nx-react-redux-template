import { RepositoriesActionType } from '@redux/action-types';
import { RepositoriesAction } from '@redux/actions';

interface _RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const _initialRepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

// DEFINE REDUCER
export const repositoriesReducer = (
  state: _RepositoriesState = _initialRepositoriesState,
  action: RepositoriesAction
): _RepositoriesState => {
  switch (action.type) {
    case RepositoriesActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };

    case RepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case RepositoriesActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
