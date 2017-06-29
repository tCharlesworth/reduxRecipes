import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { RECIPE_FETCH_SUCCESS, CREATE_RECIPE_SUCCESS, CREATE_RECIPE_STARTED, CREATE_RECIPE_UPDATE, RECIPE_UPDATE_SUCCESS, RECIPE_UPDATE_ERROR } from './types';

export const recipesFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/recipes/`)
            .on('value', snapshot => {
                dispatch({type: RECIPE_FETCH_SUCCESS, payload: snapshot.val()});
            })
            // .catch((error)=> dispatch({type: RECIPE_FETCH_ERROR, payload: error}));
    };
};

export const recipeCreate = ( name, ingredients, directions) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({type: CREATE_RECIPE_STARTED});
        firebase.database().ref(`/users/${currentUser.uid}/recipes`)
            .push({ name, ingredients, directions })
            .then(()=>{ dispatch({type: CREATE_RECIPE_SUCCESS}); })
            .catch((error)=>{ dispatch({type: CREATE_RECIPE_ERROR, payload: error})});
    };
};

export const newRecipeUpdate = (prop, value) => {
    return {
        type: CREATE_RECIPE_UPDATE,
        payload: { prop, value }
    };
};

export const updateRecipe = ({name, ingredients, directions, id}) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firbase.database().ref(`/users/${currentUser.uid}/recipes/${id}`)
            .set({name, ingredients, directions})
            .then(()=>{ dispatch({type: RECIPE_UPDATE_SUCCESS}); Actions.pop(); })
            .catch((err)=>{ dispatch({type: RECIPE_UPDATE_ERROR, payload: err}); });
    };
};