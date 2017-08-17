import { GROUP_FORM_UPDATE } from '../actions/types';

const INITIAL_STATE = { name: "", isPrivate: false, password: "", loading: false, error: null };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GROUP_FORM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
}