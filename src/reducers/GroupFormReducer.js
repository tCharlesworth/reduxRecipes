import { GROUP_FORM_UPDATE, GROUP_CREATE_STARTED, GROUP_CREATE_SUCCESS, GROUP_CREATE_FAILURE } from '../actions/types';

const INITIAL_STATE = { name: "", isPrivate: false, password: "", loading: false, error: null };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GROUP_CREATE_STARTED:
      return { ...state, loading: true };
    case GROUP_CREATE_SUCCESS:
      return INITIAL_STATE;
    case GROUP_CREATE_FAILURE:
      return { ...state, error: action.payload };
    case GROUP_FORM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
}