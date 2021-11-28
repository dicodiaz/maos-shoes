import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import shoppingCartReducer from './ducks/shoppingCart';

const reducer = combineReducers({
  shoppingCartReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
