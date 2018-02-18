import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
//import { browserHistory } from 'react-router';
import { createLogger } from "redux-logger";
import getListReducer from './reducers/getListReducer';

const logger = createLogger({});
const rootReducer = combineReducers({
    getListReducer
})
const store = createStore(rootReducer,{}, applyMiddleware(logger, thunk, promise()));

export default store;