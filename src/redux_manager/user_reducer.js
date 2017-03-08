import {ADD_USER, VIEW_USER, SAVE_LIST_USERS} from './user_action_creator';

var userID = 0;

export default (state = {userList: [], chosenUser: {}}, action) => {
    switch (action.type){
        case ADD_USER:
            userID++;
            let user = {...action.payload, userID};
            return {
                userList: [
                    ...state.userList,
                    user
                ]
            };
        case VIEW_USER:
            let userInfo = state.userList.find((user) => {
                if (user.userID === action.payload){
                    return user;
                }
            });
            return {
                userList: state.userList,
                chosenUser: userInfo
            };
        case SAVE_LIST_USERS:
            return {
                userList: action.payload,
                chosenUser: state.chosenUser
            };
        default:
            return state;
    }
}