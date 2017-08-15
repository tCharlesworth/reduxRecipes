import { 
    LOGIN_EMAIL_CHANGED, 
    LOGIN_PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAILED, 
    LOGIN_USER_STARTED,
    LOGIN_REMEMBER_TOGGLED } from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '', 
    error: '', 
    loading: false, 
    rememberMe: false,
    user: null 
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case LOGIN_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case LOGIN_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_REMEMBER_TOGGLED:
            return { ...state, rememberMe: action.payload };
        case LOGIN_USER_SUCCESS:
            const { email, uid } = action.payload;
            return { ...state, ...INITIAL_STATE, user: {email, uid} };
        case LOGIN_USER_FAILED:
            return { ...state, error: 'Authentication Failed', password: '', loading: false };
        case LOGIN_USER_STARTED:
            return { ...state, error: '', loading: true };
        default:
            return state;
    }
}