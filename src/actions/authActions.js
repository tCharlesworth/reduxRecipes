import { 
    LOGIN_EMAIL_CHANGED, LOGIN_PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_STARTED } from './types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';
import { StorageConfig } from '../config';

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
            .then(user => { loginUserSuccess(dispatch, user, password) })
            .catch((err) => { loginUserFailure(dispatch, err) });
    };
};

export const loginUserWithToken = () => {
    return (dispatch) => {
        const { currentUser } = firebase.auth();
        AsyncStorage.getItem(StorageConfig.userDataKey)
            .then((data)=>{
                if(data) {
                    // Attempt automatic login?
                    let userData = JSON.parse(data);
                    console.log('data retrieved from storage: ', userData);
                    firebase.auth().signInWithEmailAndPassword(userData.email, userData.loginValue)
                        .then((authData) => {
                            console.log('User Authenticated. Going to recipe list');
                            // Logged in! Lets jump to the recipe list page :)
                            loginUserSuccess(dispatch, authData, userData.loginValue);
                        })
                        .catch((error) => {
                            console.log('error using user token.', error);
                            // Could not login. Redirect to login form.
                            Actions.login({type: 'reset'});
                        });
                } else {
                    // First signin still needed. Route to the Signup Page
                    Actions.signup({type: 'reset'});
                }
            })
            .catch((error) => {
                console.log('AsyncStorage error: ', error);
            });
    }
};

const loginUserSuccess = (dispatch, user, loginValue) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    // Save the users information to AsyncStorage for automatic login in the future
    const { email, uid } = user;
    const newUser = { email, uid , loginValue };
    console.log("SAVING: ", newUser);
    AsyncStorage.setItem(StorageConfig.userDataKey, JSON.stringify(newUser))
        // .then(()=> {
        //     AsyncStorage.getItem(StorageConfig.userDataKey)
        //         .then((data) => {
        //             console.log("SAVED: ", JSON.parse(data));
        //         });
        // })

    Actions.main({type: 'reset'});
};

const loginUserFailure = (dispatch, error) => {
    dispatch({
        type: LOGIN_USER_FAILED,
        error
    });
};