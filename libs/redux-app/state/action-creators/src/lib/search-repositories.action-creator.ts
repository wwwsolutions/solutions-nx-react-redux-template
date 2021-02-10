import axios from 'axios';
import { Dispatch } from 'redux';

import { RepositoriesActionType } from '@redux/action-types';
import { RepositoriesAction } from '@redux/actions';

// DEFINE ACTION CREATOR
export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<RepositoriesAction>): Promise<void> => {
    // DISPATCH ACTION
    dispatch({
      type: RepositoriesActionType.SEARCH_REPOSITORIES,
    });

    try {
      // REQUEST LOGIC
      //-------------------------------------------------------------

      // GET DATA
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      // EXTRACT ARRAY OF NAMES
      const names: string[] = data.objects.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (result: any): string => result.package.name
      );

      // DISPATCH ACTION
      dispatch({
        type: RepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      // DISPATCH ACTION
      dispatch({
        type: RepositoriesActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
