import { combineReducers } from 'redux';
import { homeReducer } from '../features/home'


export default function rootReducer() {
  return combineReducers({
    homeReducer: homeReducer,
  });
}