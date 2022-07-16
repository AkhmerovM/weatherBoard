import { createSlice } from '@reduxjs/toolkit';
import { cities } from './cities';
import { TCity } from './types';

type CityState = {
    data: TCity[]
}
export const citySlice = createSlice<CityState, {[key: string]:(state: CityState) => void}, string>({
    name: 'weather',
    initialState: {
        data: cities
    },
    reducers: {
    }
});
