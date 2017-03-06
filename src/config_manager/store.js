import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import rootReducer from './rootReducer';
import logger from 'middlewares/Logger'

let store;
if(__DEV__){
    const enhancer = compose(
        applyMiddleware(logger, thunk),
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        })
    );
    store = createStore(rootReducer, enhancer);
} else {
    store = createStore(rootReducer, applyMiddleware(logger, thunk));
}

export default store;

