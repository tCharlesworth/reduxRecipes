import { NAVIGATE_TO_PAGE } from './types';
import { NavigationActions } from 'react-navigation';

export const goToPage = (routeName) => {
  return (dispatch) => {
    dispatch(NavigationActions.navigate({ routeName }));
  };
};