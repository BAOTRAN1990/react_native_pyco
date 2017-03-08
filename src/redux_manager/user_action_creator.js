import {
  Alert
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {startLoading, stopLoading} from 'redux_manager/common_action_creator';
import APIServices from 'network_call/ApiServices';

// action types
export const ADD_USER = 'add_user';
export const VIEW_USER = 'view_user';
export const SAVE_LIST_USERS = 'save_list_users';

function addUser(userInfo){
    return {
        type: ADD_USER,
        payload: userInfo
    }
}

function viewUserDtl(userID){
    return {
        type: VIEW_USER,
        payload: userID
    }
}

export default function addUserAsync(userInfo){
    return dispatch => {
        dispatch(startLoading());
        setTimeout(() => {
            dispatch(addUser(userInfo));
            dispatch(stopLoading());
            Alert.alert(
                'Message',
                'Signed up successfully!!! Please sign in again.',
                [
                    {text: 'OK', onPress: () => Actions.pop()},
                ]
            );
        }, 2000);
    };
}

export function viewUserDtlAsync(userID){
    return dispatch => {
        dispatch(viewUserDtl(userID));
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