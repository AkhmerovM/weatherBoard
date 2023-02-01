import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCity } from './types';
import { ModuleState } from '@/store/types';

export type CityState = {
    data: TCity[],
    error: Error,
    moduleState: ModuleState
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
        moduleState: ModuleState.initial
    },
    reducers: {
        loadCities: (state: CityState, action: PayloadAction<CityState>): CityState => {
            const { data, error, moduleState } = action.payload;
            return { data, error, moduleState };
        },
        startLoadingCities: (state: CityState): CityState => {
            return { ...state, moduleState: ModuleState.loading };
        }
    }
});
export const cityActions = citySlice.actions;
