import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer'
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk'

export const store = createStore(
  rootReducer(),
  applyMiddleware(thunk)
);
