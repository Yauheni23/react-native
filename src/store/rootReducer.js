import { combineReducers } from 'redux';
import { homeReducer } from '../features/home'
import { guidesReducer } from '../features/guides'


export default function rootReducer() {
  return combineReducers({
    homeReducer: homeReducer,
    guidesReducer: guidesReducer
  });
}