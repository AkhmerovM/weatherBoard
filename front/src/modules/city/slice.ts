import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCity } from './types';

export type CityState = {
    data: TCity[]
}
type CityCaseReducers = {
    loadCities: (state: CityState, action: PayloadAction<TCity[]>) => CityState
}
export const citySlice = createSlice<CityState, CityCaseReducers>({
    name: 'city',
    initialState: {
        data: []
    },
    reducers: {
        loadCities: (state: CityState, action: PayloadAction<TCity[]>): CityState => {
            console.log('LOAD CITIES', action);
            return { data: action.payload };
        }
    }
});
export const actions = citySlice.actions;
