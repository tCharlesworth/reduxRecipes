import { 
    LOGIN_EMAIL_CHANGED, LOGIN_PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_STARTED } from './types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const loginEmailChanged = (email) => {
    return {
        type: LOGIN_EMAIL_CHANGED,
        payload: email
    };
};

export const loginPasswordChanged = (pword) => {
    return {
        type: LOGIN_PASSWORD_CHANGED,
        payload: pword
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_STARTED });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => { loginUserSuccess(dispatch, user) })
            .catch((err) => { loginUserFailure(dispatch, err) });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const loginUserFailure = (dispatch, error) => {
    dispatch({
        type: LOGIN_USER_FAILED,
        error
    });
};