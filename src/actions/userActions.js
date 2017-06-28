import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { CREATE_EMAIL_CHANGED, CREATE_PASSWORD_CHANGED, CREATE_USER_STARTED, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from './types';

export const createEmailChanged = (email) => {
    return {
        type: CREATE_EMAIL_CHANGED,
        payload: email
    };
};

export const createPasswordChanged = (password) => {
    return {
        type: CREATE_PASSWORD_CHANGED,
        payload: password
    };
};

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