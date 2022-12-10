import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCity } from './types';

export type CityState = {
    data: TCity[],
    error: Error
}
type CityCaseReducers = {
    loadCities: (state: CityState, action: PayloadAction<CityState>) => CityState
}
export const citySlice = createSlice<CityState, CityCaseReducers>({
    name: 'city',
    initialState: {
        data: [],
        error: null
    },
    reducers: {
        loadCities: (state: CityState, action: PayloadAction<CityState>): CityState => {
            return { data: action.payload.data, error: action.payload.error };
        }
    }
});
export const actions = citySlice.actions;
