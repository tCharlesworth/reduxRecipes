import { GROUPS_LOAD_STARTED, GROUPS_LOAD_SUCCESS, GROUPS_LOAD_FAILURE,
         GROUPS_SEARCH_STARTED, GROUPS_SEARCH_SUCCESS, GROUPS_SEARCH_FAILURE, GROUPS_SEARCH_UPDATE } from './types';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';

export const loadUserGroups = () => {
    return (dispatch) => {
        dispatch({type: GROUPS_LOAD_STARTED});
    };
}

export const searchAllGroups = (searchTerms) => {
    return (dispatch) => {
        dispatch({type: GROUPS_SEARCH_STARTED});
    };
}

export const groupSearchUpdate = (prop, value) => {
    return {
        type: GROUPS_SEARCH_UPDATE,
        payload: { prop, value }
    };
}