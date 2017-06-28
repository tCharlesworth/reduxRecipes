import { 
    CREATE_EMAIL_CHANGED, 
    CREATE_PASSWORD_CHANGED,
    CREATE_USER_STARTED,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: ''
};

export default SignupReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case CREATE_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case CREATE_USER_STARTED:
            return { ...state, loading: true, error: '' };
        case CREATE_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE };
        case CREATE_USER_FAILURE:
            console.log('CAUGHT ERROR: ', action.payload);
            return { ...state, error: 'Signup Failed', password: '', loading: false };
        default:
            return state;
    }
};