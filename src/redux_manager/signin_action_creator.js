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

export function logInRequestFailed(error){
    return {
        type: FAILED,
        error: error.message
    }
}