import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import appReducer from '../reducers';

export const store = createStore(appReducer, applyMiddleware(logger));