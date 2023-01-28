import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PropType } from '@/modules/common/types';
import { TCity } from '@/modules/city/types';

export type DrawerState = PropType<TCity, 'id'>[];

export type DrawerCaseReducer = {
    set: (state: DrawerState, action: PayloadAction<PropType<TCity, 'id'>[]>) => DrawerState
}

export const drawerSlice = createSlice<DrawerState, DrawerCaseReducer>({
    name: 'DrawerSlice',
    initialState: [],
    reducers: {
        set: (state, action) => {
            return action.payload;
        }
    }
});
export const drawerActions = drawerSlice.actions;
