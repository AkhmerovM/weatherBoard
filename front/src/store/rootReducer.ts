import { combineReducers } from 'redux';
import { citySlice } from '@/modules/city/slice';

export const rootReducer = combineReducers({
    cities: citySlice.reducer
});
