import { Actions } from 'react-native-router-flux';

// Action types
export const REQUEST = 'Request';
export const SUCCESS = 'Success';
export const FAILED = 'Failed';

// Action Creators
export function logInRequest(){
    return {
        type: REQUEST
    }
}

export function logInRequestSuccess(data){
    return {
        type: SUCCESS,
        payload: data
    }
}

export function logInRequestSuccessAsync(data){
    return dispatch => {
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(logInRequestSuccess(data));
            Actions.signUp();
        }, 5000);
    }
}

export function logInRequestFailed(error){
    return {
        type: FAILED,
        error: error.message
    }
}