import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { RECIPE_FETCH_SUCCESS, CREATE_RECIPE_SUCCESS, CREATE_RECIPE_UPDATE } from './types';

export const recipesFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/recipes/`)
            .on('value', snapshot => {
                dispatch({type: RECIPE_FETCH_SUCCESS, payload: snapshot.val()});
            });
    };
};

const recipeCreateSuccess = (dispatch) => {
    Actions.list({type: 'reset'});
    dispatch({type: CREATE_RECIPE_SUCCESS});
};

export const recipeCreate = ( name, ingredients, directions) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/recipes`)
            .push({ name, ingredients, directions })
            .then(()=>{ recipeCreateSuccess(dispatch); });
    };
};

export const newRecipeUpdate = (prop, value) => {
    return {
        type: CREATE_RECIPE_UPDATE,
        payload: { prop, value }
    };
}