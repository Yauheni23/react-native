import { createSelector } from 'reselect';

export const entryReducer = state => state.entryReducer;

export const getToken = () => createSelector(
  entryReducer,
  entry => entry.token,
);

export const getIsLoading = () => createSelector(
  entryReducer,
  entry => entry.isLoading,
);

export const getError = () => createSelector(
  entryReducer,
  entry => entry.error,
);
