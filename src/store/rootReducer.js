import { combineReducers } from 'redux';
import { homeReducer } from '../features/home'
import { entryReducer } from '../features/entry'


export default function rootReducer() {
  return combineReducers({
    homeReducer: homeReducer,
    entryReducer: entryReducer,
  });
}