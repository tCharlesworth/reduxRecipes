import { NavigationActions } from 'react-navigation';
import Navigator from '../Navigator';

const INITIAL_STATE = Navigator.router.getStateForAction(NavigationActions.init);

const NavReducer = (state = INITIAL_STATE, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default NavReducer;