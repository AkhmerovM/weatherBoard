import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PropType } from '@/modules/common/types';
import { TCity } from '@/modules/city/types';

type TDrawerState = PropType<TCity, 'id'>[];

export type DrawerCaseReducer = {
    set: (state: TDrawerState, action: PayloadAction<PropType<TCity, 'id'>[]>) => TDrawerState
}

export const drawerSlice = createSlice<TDrawerState, DrawerCaseReducer>({
    name: 'DrawerSlice',
    initialState: [],
    reducers: {
        set: (state, action) => {
            return action.payload;
        }
    }
});
export const drawerActions = drawerSlice.actions;
