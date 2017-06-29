import { 
    USER_FORM_UPDATE,
    CREATE_USER_STARTED,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    username: '',
    terms: false,
    loading: false,
    error: ''
};

export default UserFormReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_FORM_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CREATE_USER_STARTED:
            return { ...state, loading: true, error: '' };
        case CREATE_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE };
        case CREATE_USER_FAILURE:
            console.log('CAUGHT ERROR: ', action.payload);
            let errMessage;
            switch(action.payload.code) {
                case 'auth/weak-password':
                    errMessage = 'Password must be 6 characters long';
                    break;
                case 'auth/email-already-in-use':
                    errMessage = 'Email already in use';
                    break;
                default:
                    errMessage = 'Signup Failed';
                    break;
            }
            return { ...state, error: errMessage, password: '', loading: false };
        default:
            return state;
    }
};
