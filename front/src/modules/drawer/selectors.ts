import { AppState } from '@/store/store';
import { DrawerState } from '@/modules/drawer/slice';
import { createSelector } from '@reduxjs/toolkit';

const selectActiveCities = (state: AppState): DrawerState => {
    return state.drawer;
};
export const selectActiveCitiesIds = createSelector(selectActiveCities, (items) => items);
