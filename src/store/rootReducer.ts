import { citySlice } from '../components/City/slice';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    cities: citySlice.reducer
});
