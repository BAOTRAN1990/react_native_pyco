import {combineReducers} from "redux";

import LogInReducer from 'redux_manager/signin_reducer';
import CommonReducer from 'redux_manager/common_reducer';

const rootReducer = combineReducers({
    LogInReducer,
    CommonReducer
});

export default rootReducer;