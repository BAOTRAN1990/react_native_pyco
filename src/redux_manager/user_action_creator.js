import { Actions } from 'react-native-router-flux';

import {startLoading, stopLoading} from 'redux_manager/common_action_creator';

// action types
export const ADD_USER = 'add_user';

function addUser(userInfo){
    console.log(userInfo);
    return {
        type: ADD_USER,
        payload: userInfo
    }
}

export default function addUserAsync(userInfo){
    return dispatch => {
        dispatch(startLoading());
        setTimeout(() => {
            dispatch(addUser(userInfo));
            dispatch(stopLoading());
            Actions.listUser();
        }, 2000);
    };
}