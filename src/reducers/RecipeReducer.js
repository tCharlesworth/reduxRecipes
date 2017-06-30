import { RECIPE_FETCH_SUCCESS, CREATE_RECIPE_SUCCESS, SET_CURRENT_RECIPE } from '../actions/types';

const INITIAL_STATE = { recipes: [], currentRecipe: {} };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RECIPE_FETCH_SUCCESS:
            return { ...state, recipes: action.payload };
        case SET_CURRENT_RECIPE:
            return { ...state, currentRecipe: action.payload };
        default:
            return state;
    }
};