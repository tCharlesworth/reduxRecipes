import { combineReducers } from 'redux';

import RecipeReducer     from './RecipeReducer';
import UserFormReducer     from './UserFormReducer';
import AuthReducer       from './AuthReducer';
import RecipeFormReducer from './RecipeFormReducer';
import NavReducer        from './NavReducer';
import GroupsReducer     from './GroupsReducer';
import GroupFormReducer  from './GroupFormReducer';

export default combineReducers({
    recipes: RecipeReducer,
    userForm: UserFormReducer,
    auth: AuthReducer,
    recipeForm: RecipeFormReducer,
    navigation: NavReducer,
    groups: GroupsReducer,
    groupForm: GroupFormReducer
});