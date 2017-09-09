import { GROUPS_LOAD_STARTED, GROUPS_LOAD_SUCCESS, GROUPS_LOAD_FAILURE,
         GROUPS_SEARCH_STARTED, GROUPS_SEARCH_SUCCESS, GROUPS_SEARCH_FAILURE, GROUPS_SEARCH_UPDATE, GROUPS_SEARCH_RESET,
         GROUP_FORM_UPDATE, GROUP_CREATE_STARTED, GROUP_CREATE_SUCCESS, GROUP_CREATE_FAILURE,
         GROUP_JOIN_STARTED, GROUP_JOIN_SUCCESS, GROUP_JOIN_FAILURE } from './types';
import { NavigationActions } from 'react-navigation';
import _ from 'lodash';
import firebase from 'firebase';

export const loadUserGroups = () => {
    return (dispatch) => {
        dispatch({type: GROUPS_LOAD_STARTED});
    };
};

export const searchAllGroups = (searchTerms) => {
    return (dispatch) => {
        if(searchTerms) {
            dispatch({type: GROUPS_SEARCH_STARTED});
            // DO THE SEARCH
            firebase.database().ref('groups').orderByChild('name').equalTo(searchTerms)
                .once('value', (data) => {
                    const results = data.val();
                    const resultArray = _.map(results, (val, uid) => {
                        return {...val, uid};
                    });
                    dispatch({type: GROUPS_SEARCH_SUCCESS, payload: resultArray})
                });
        } else {
            dispatch({type: GROUPS_SEARCH_FAILURE, payload: "Please enter something to search for."});
        }
    };
};

export const resetSearch = () => {
    return {
        type: GROUPS_SEARCH_RESET
    };
};

export const groupSearchUpdate = (prop, value) => {
    return {
        type: GROUPS_SEARCH_UPDATE,
        payload: { prop, value }
    };
};

export const groupFormUpdate = (prop, value) => {
    return {
        type: GROUP_FORM_UPDATE,
        payload: { prop, value }
    };
};

export const createGroup = (name, isPrivate, password, currentUID) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({type: GROUP_CREATE_STARTED});
        firebase.database().ref(`/groups`)
            .push(({name, isPrivate, password, owner: currentUser.uid }))
            .then((newGroupData) => {
                // Now Edit the user record to know it has joined a group.
                firebase.database().ref(`/users/${currentUser.uid}/groups/`)
                    .push(newGroupData.key)
                    .then((stuffing) => {
                        dispatch({type: GROUP_CREATE_SUCCESS});
                        // dispatch(NavigationActions.SOMETHING???);
                    })
                    .catch((err) => {dispatch({ type: GROUP_CREATE_FAILURE, payload: err })});
            })
            .catch((err) => { dispatch({ type: GROUP_CREATE_FAILURE, payload: err })});
    };
};

export const joinGroup = (groupUid) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({type: GROUP_JOIN_STARTED});
        firebase.database().ref(`/groups/${groupUid}/members`)
            .push(currentUser.uid)
            .then(() => {
                //success
                firebase.database().ref(`/users/${currentUser.uid}/groups`)
                    .push(groupUid)
                    .then(() => {
                        //success
                        dispatch({type: GROUP_JOIN_SUCCESS});
                    })
                    .catch((err)=> {
                        dispatch({type: GROUP_JOIN_FAILURE, payload: err});
                    });
            })
            .catch((err) => {
                //error
                dispatch({type: GROUP_JOIN_FAILURE, payload: err});
            });
    };
};