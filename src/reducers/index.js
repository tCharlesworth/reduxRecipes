import { combineReducers } from 'redux';

import RecipeReducer     from './RecipeReducer';
import SignupReducer     from './SignupReducer';
import AuthReducer       from './AuthReducer';
import RecipeFormReducer from './RecipeFormReducer';

export default combineReducers({
    recipes: RecipeReducer,
    signup: SignupReducer,
    auth: AuthReducer,
    recipeForm: RecipeFormReducer
});