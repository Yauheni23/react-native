import { createSelector } from 'reselect';

export const homeReducer = state => state.homeReducer;

export const getIsVisibleHome = () => createSelector(
  homeReducer,
  home => home.isVisibleHome,
);
