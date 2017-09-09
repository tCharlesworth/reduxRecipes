import { GROUPS_SEARCH_STARTED, GROUPS_SEARCH_SUCCESS, GROUPS_SEARCH_FAILURE, GROUPS_SEARCH_UPDATE, GROUPS_SEARCH_RESET,
         GROUP_JOIN_STARTED, GROUP_JOIN_SUCCESS, GROUP_JOIN_FAILURE } from '../actions/types';

const INITIAL_STATE = { usersGroups: [], searching: false, searchResults: null, searchError: null, joining: false };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GROUPS_SEARCH_STARTED:
      return { ...state, searching: true, searchError: null };
    case GROUPS_SEARCH_SUCCESS:
      return { ...INITIAL_STATE, searchResults: action.payload };
    case GROUPS_SEARCH_FAILURE:
      return { ...state, searching: false, searchError: action.payload }
    case GROUPS_SEARCH_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case GROUPS_SEARCH_RESET:
      return INITIAL_STATE;
    case GROUP_JOIN_STARTED:
      return { ...state, joining: true };
    case GROUP_JOIN_FAILURE:
      return INITIAL_STATE;
    case GROUP_JOIN_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};