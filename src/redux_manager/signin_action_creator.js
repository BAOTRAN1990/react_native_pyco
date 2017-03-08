import { Actions } from 'react-native-router-flux';

import {startLoading, stopLoading} from 'redux_manager/common_action_creator';
import APIServices from 'network_call/ApiServices'
import {getListUserAsync} from 'redux_manager/user_action_creator'

// Action types
export const SUCCESS = 'Success';
export const FAILED = 'Failed';

// sample user info
const userInfo = {
	trainee_id: 1,
	full_name: 'test',
	email: 'test@gmail.com',
	birthday: '1986-01-20',
	token: 'abcxyzwendsjkfjdsklfjkds'
};

// Action Creators
export function logInRequestSuccess(data){
    return {
        type: SUCCESS,
        payload: data
    }
}

export default function logInAsync(userCredentials){
    return dispatch => {
        dispatch(startLoading());
        APIServices.signIn(userCredentials).then(userInfo => {
            dispatch(logInRequestSuccess(userInfo));
            dispatch(stopLoading());
            dispatch(getListUserAsync());
        }).catch(err => {
            dispatch(logInRequestFailed({message: err.message}));
            dispatch(stopLoading());
        });
    }
}

export function logInRequestFailed(error){
    return {
        type: FAILED,
        error: error.message
    }
}