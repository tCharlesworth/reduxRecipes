import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { USER_FORM_UPDATE, CREATE_USER_STARTED, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from './types';

export const userFormUpdate = (prop, value) => {
    return {
        type: USER_FORM_UPDATE,
        payload: { prop, value }
    };
}

export const createUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({
            type: CREATE_USER_STARTED
        });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => createUserSuccess(dispatch, user))
            .catch(error => createUserFailure(dispatch, error));
    };
}

const createUserSuccess = (dispatch, userData) => {
    const {email, uid} = userData;

    dispatch({
        type: CREATE_USER_SUCCESS,
        payload: {email, uid}
    });

    Actions.main();
};

const createUserFailure = (dispatch, error) => {
    dispatch({
        type: CREATE_USER_FAILURE,
        payload: error
    });
};