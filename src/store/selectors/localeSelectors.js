import { createSelector } from 'reselect';

export const localeSelector = createSelector(
  state => state.locale.locale,
  locale => locale
);
