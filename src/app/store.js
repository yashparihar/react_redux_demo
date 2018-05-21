import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import userReducer from './reducer/userReducer';
import loginReducer from './reducer/loginReducer';


export default createStore(combineReducers({
        user: userReducer,
        login: loginReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger, promise())
);