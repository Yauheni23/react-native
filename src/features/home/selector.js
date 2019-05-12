import { createSelector } from 'reselect';

export const homeReducer = state => state.homeReducer;

export const getIsLoading = () => createSelector(
  homeReducer,
  home => home.isLoading,
);

export const getError = () => createSelector(
  homeReducer,
  home => home.error,
);

export const getIsProfile = () => createSelector(
  homeReducer,
  home => home.isProfile,
);
