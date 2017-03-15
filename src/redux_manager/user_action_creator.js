import {
  Alert
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {startLoading, stopLoading} from 'redux_manager/common_action_creator';
import APIServices from 'network_call/ApiServices';

// action types
export const ADD_USER_FAILED = 'add_user_failed';
export const VIEW_USER = 'view_user';
export const SAVE_LIST_USERS = 'save_list_users';

function addUserFailed(error){
    return {
        type: ADD_USER_FAILED,
        error: error.message
    }
}

function viewUserDtl(user){
    return {
        type: VIEW_USER,
        payload: user
    }
}

export default function addUserAsync(userInfo){
    return dispatch => {
        dispatch(startLoading());
        APIServices.addUser(userInfo).then(result => {
            dispatch(stopLoading());
            Alert.alert(
                'Message',
                'Signed up successfully!!! Please sign in again.',
                [
                    {text: 'OK', onPress: () => Actions.pop()},
                ]
            );
        }).catch(err => {
            dispatch(addUserFailed({message: err.message}));
            dispatch(stopLoading());
        });
    };
}

export function viewUserDtlAsync(userID){
    return dispatch => {
        APIServices.getUserDtl(userID).then(user => {
            dispatch(viewUserDtl(user));
            Actions.userDtl();
        });
    }
}

export function getListUserAsync(){
    return dispatch => {
        APIServices.getListUser().then(listUser => {
            dispatch(saveListUsersToState(listUser));
            Actions.listUser();
        });
    }
}

export function saveListUsersToState(listUser){
    return {
        type: SAVE_LIST_USERS,
        payload: listUser
    }
}