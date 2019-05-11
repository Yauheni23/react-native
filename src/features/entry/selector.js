import { createSelector } from 'reselect';

export const entryReducer = state => state.entryReducer;

export const getIsLogin = () => createSelector(
  entryReducer,
  entry => entry.isLogin,
);
