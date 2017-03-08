import {combineReducers} from "redux";

import LogInReducer from 'redux_manager/signin_reducer';
import CommonReducer from 'redux_manager/common_reducer';
import UserReducer from 'redux_manager/user_reducer';

const rootReducer = combineReducers({
    LogInReducer,
    CommonReducer,
    UserReducer
});

export default rootReducer;