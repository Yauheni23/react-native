import { createSelector } from 'reselect';

export const guidesReducer = state => state.guidesReducer;

export const getNumberGuide = () => createSelector(
  guidesReducer,
  guides => guides.numberGuide,
);
