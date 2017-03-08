import {SUCCESS, FAILED} from './signin_action_creator';

// Reducer
const INITIAL_STATE = {
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SUCCESS:
            return {
                error: '',
                user: action.payload
            };
        case FAILED:
            return {
                error: action.error
            };
        default:
            return state;
    }
}