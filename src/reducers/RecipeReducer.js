import { RECIPE_FETCH_SUCCESS, CREATE_RECIPE_SUCCESS, CREATE_RECIPE_UPDATE } from '../actions/types';

const INITIAL_STATE = { recipes: [] };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RECIPE_FETCH_SUCCESS:
            return { recipes: action.payload };
        default:
            return state;
    }
};