import { AppState } from '@/store/store';
import { DrawerState } from '@/modules/drawer/slice';

export const selectActiveCitiesIds = (state: AppState): DrawerState => {
    return state.drawer;
};
