import {
  Alert
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {startLoading, stopLoading} from 'redux_manager/common_action_creator';

// action types
export const ADD_USER = 'add_user';
export const VIEW_USER = 'view_user';

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
                    {text: 'OK', onPress: () => Actions.signIn()},
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