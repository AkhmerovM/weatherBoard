import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCity } from './types';
import { ModuleState } from '@/store/types';

export type CityState = {
    data: TCity[],
    error: Error,
    state: ModuleState
}
type CityCaseReducers = {
    loadCities: (state: CityState, action: PayloadAction<CityState>) => CityState
    startLoadingCities: (state: CityState) => CityState
}
export const citySlice = createSlice<CityState, CityCaseReducers>({
    name: 'city',
    initialState: {
        data: [],
        error: null,
        state: ModuleState.initial
    },
    reducers: {
        loadCities: (state: CityState, action: PayloadAction<CityState>): CityState => {
            const { data, error, state: moduleState } = action.payload;
            return { data, error, state: moduleState };
        },
        startLoadingCities: (state: CityState): CityState => {
            return { ...state, state: ModuleState.loading };
        }
    }
});
export const cityActions = citySlice.actions;
