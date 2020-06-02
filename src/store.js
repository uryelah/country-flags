import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import subscriptionsReducer from './reducers/subscription';
import groupingReducer from './reducers/grouping';

const reducer = combineReducers({ state: subscriptionsReducer, group: groupingReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;