import axios from 'axios';
import { Dispatch } from 'redux';

import { RepositoriesActionType } from '@redux/action-types';
import { RepositoriesAction } from '@redux/actions';

// DEFINE ACTION CREATOR
export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<RepositoriesAction>): Promise<void> => {
    dispatch({
      type: RepositoriesActionType.SEARCH_REPOSITORIES,
    });

    try {
      // REQUEST LOGIC START -------------------------------------------------------------

      // get data from NPM api
      const { data } = await axios.get( 
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      // extract array of package names
      const packageNames: string[] = data.objects.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (result: any): string => result.package.name
      );

      // REQUEST LOGIC END -------------------------------------------------------------

      dispatch({
        type: RepositoriesActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: packageNames,
      });
    } catch (err) {
      dispatch({
        type: RepositoriesActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
