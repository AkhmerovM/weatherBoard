import { createSlice } from '@reduxjs/toolkit';
import { TCity } from './types';

export type CityState = {
    data: TCity[]
}
export const citySlice = createSlice<CityState, {[key: string]:(state: CityState) => void}, string>({
    name: 'weather',
    initialState: {
        data: []
    },
    reducers: {
    }
});
