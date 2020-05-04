import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {rootReducer} from './redux';

const logger = createLogger();

const middlewares = applyMiddleware(logger, thunk);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;