import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { RECIPE_FETCH_SUCCESS, CREATE_RECIPE_SUCCESS, CREATE_RECIPE_ERROR, CREATE_RECIPE_CLEAR, CREATE_RECIPE_STARTED, CREATE_RECIPE_UPDATE, 
         SET_CURRENT_RECIPE, UPDATE_RECIPE_ERROR, UPDATE_RECIPE_STARTED, UPDATE_RECIPE_SUCCESS,
        DELETE_RECIPE_STARTED, DELETE_RECIPE_SUCCESS, DELETE_RECIPE_ERROR } from './types';

export const recipesFetch = () => {
    const { currentUser } = firebase.auth();
    // const currentUser = {
    //     uid: 'Xq1gXKt2zFgKk7qSPQaPubL5rzB2'
    // };
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
            .then(()=>{ 
                dispatch({type: CREATE_RECIPE_SUCCESS}); 
                dispatch(NavigationActions.navigate({ routeName: 'RecipeList'}));
            })
            .catch((error)=>{ dispatch({type: CREATE_RECIPE_ERROR, payload: error})});
    };
};

export const newRecipeUpdate = (prop, value) => {
    return {
        type: CREATE_RECIPE_UPDATE,
        payload: { prop, value }
    };
};

export const updateRecipe = ({name, ingredients, directions, uid}) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({type: UPDATE_RECIPE_STARTED});
        firebase.database().ref(`/users/${currentUser.uid}/recipes/${uid}`)
            .set({name, ingredients, directions})
            .then(()=>{ 
                dispatch({type: UPDATE_RECIPE_SUCCESS});
                //***************XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*************** */
            })
            .catch((err)=>{ dispatch({type: UPDATE_RECIPE_ERROR, payload: err}); });
    };
};

export const setCurrentRecipe = ({name, ingredients, directions, uid}) => {
    return (dispatch) => {
        dispatch({
            type: SET_CURRENT_RECIPE,
            payload: {name, ingredients, directions, uid}
        });
        dispatch(NavigationActions.navigate({ routeName: 'RecipeDetail', params: {name}}));
    }
};

export const clearRecipeForm = () => {
    return { type: CREATE_RECIPE_CLEAR };
}

export const deleteRecipe = (uid) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({type: DELETE_RECIPE_STARTED});
        firebase.database().ref(`/users/${currentUser.uid}/recipes/${uid}`)
            .remove()
            .then(() => {
                dispatch({type: DELETE_RECIPE_SUCCESS});
                //***************XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*************** */
            })
            .catch((error) => dispatch({type: DELETE_RECIPE_ERROR, payload: error}));
    };
}