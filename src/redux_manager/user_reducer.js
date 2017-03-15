import {ADD_USER_FAILED, VIEW_USER, SAVE_LIST_USERS} from './user_action_creator';

var userID = 0;

export default (state = {userList: [], chosenUser: {}, error: ''}, action) => {
    switch (action.type){
        case ADD_USER_FAILED:
            return {
                ...state,
                error: action.error
            };
        case VIEW_USER:
            return {
                error: '',
                userList: state.userList,
                chosenUser: action.payload
            };
        case SAVE_LIST_USERS:
            return {
                error: '',
                userList: action.payload,
                chosenUser: state.chosenUser
            };
        default:
            return state;
    }
}