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
            //Actions.signUp();
            dispatch(logInRequestSuccess(data));
            Actions.listUser();
        }, 1000);
    }
}

export function logInRequestFailed(error){
    return {
        type: FAILED,
        error: error.message
    }
}