import { combineReducers } from 'redux';
import { citySlice } from '@/modules/city/slice';
import { drawerSlice } from '@/modules/drawer/slice';

export const rootReducer = combineReducers({
    cities: citySlice.reducer,
    drawer: drawerSlice.reducer
});
