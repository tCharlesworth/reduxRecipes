import { GROUPS_SEARCH_STARTED, GROUPS_SEARCH_SUCCESS, GROUPS_SEARCH_FAILURE, GROUPS_SEARCH_UPDATE } from '../actions/types';

const INITIAL_STATE = { usersGroups: [], searching: false, searchResults: null };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GROUPS_SEARCH_STARTED:
      return { ...state, searching: true };
    case GROUPS_SEARCH_SUCCESS:
      return { ...state, searching: false, searchResults: action.payload };
    case GROUPS_SEARCH_FAILURE:
      return { ...state, searching: false }
    case GROUPS_SEARCH_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};