import { createSlice } from '@reduxjs/toolkit';

type CityState = {
    value: number
}
export const citySlice = createSlice<CityState, {[key: string]:(state: CityState) => void}, string>({
    name: 'weather',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state: CityState) => {
            return { value: state.value + 1 };
        },
        decrement: (state: CityState) => {
            return { value: state.value - 1 };
        }
    }
});
