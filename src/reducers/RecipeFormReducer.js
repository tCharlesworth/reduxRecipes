import { CREATE_RECIPE_SUCCESS, CREATE_RECIPE_UPDATE } from '../actions/types';

const INITIAL_STATE = {name: '', ingredients: '', directions: ''};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_RECIPE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};