import { createSlice } from '@reduxjs/toolkit';
import { TCity } from './types';
import { cities } from '@/server/constants';

export type CityState = {
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
