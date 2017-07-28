import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import TaskReducer from '../reducers';

export const store = createStore(TaskReducer, applyMiddleware(logger));