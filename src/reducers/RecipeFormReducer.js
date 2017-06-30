import { CREATE_RECIPE_SUCCESS, CREATE_RECIPE_ERROR, CREATE_RECIPE_STARTED, CREATE_RECIPE_UPDATE } from '../actions/types';
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {name: '', ingredients: '', directions: '', error: '', loading: false};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_RECIPE_STARTED:
            return {...state, loading: true};
        case CREATE_RECIPE_ERROR:
            return {...state, error: 'Failed to Save Recipe', loading: false};
        case CREATE_RECIPE_SUCCESS:
            Actions.pop();
            return INITIAL_STATE;
        case CREATE_RECIPE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};