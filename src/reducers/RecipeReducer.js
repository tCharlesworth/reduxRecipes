import { RECIPE_FETCH_SUCCESS, CREATE_RECIPE_SUCCESS, SET_CURRENT_RECIPE, DELETE_RECIPE_SUCCESS } from '../actions/types';

const INITIAL_STATE = { recipes: [], currentRecipe: {} };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RECIPE_FETCH_SUCCESS:
            return { ...state, recipes: action.payload };
        case SET_CURRENT_RECIPE:
            return { ...state, currentRecipe: action.payload };
        case DELETE_RECIPE_SUCCESS:
            return { ...state, currentRecipe: {}};
        default:
            return state;
    }
};