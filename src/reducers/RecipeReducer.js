import { RECIPE_FETCH_SUCCESS, CREATE_RECIPE_SUCCESS } from '../actions/types';

const INITIAL_STATE = { recipes: [] };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RECIPE_FETCH_SUCCESS:
            return { recipes: action.payload };
        // case CREATE_RECIPE_SUCCESS: POSSIBLY NOT NEED. BECAUSE = FIREBASE
        //     return {recipes: [...state.recipes, action.payload]}
        default:
            return state;
    }
};