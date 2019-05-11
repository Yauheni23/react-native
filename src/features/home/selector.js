import { createSelector } from 'reselect';

export const homeReducer = state => state.entryReducer;

export const getIsLogin = () => createSelector(
  entryReducer,
  entry => entry.isLogin,
);
