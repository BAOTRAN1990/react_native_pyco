import {ADD_USER} from './user_action_creator';

export default (state = {userList: []}, action) => {
    switch (action.type){
        case ADD_USER:
            return {
                userList: [
                    ...state.userList,
                    action.payload
                ]
            };
        default:
            return state;
    }
}