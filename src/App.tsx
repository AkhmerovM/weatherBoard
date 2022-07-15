import React from 'react';
import { Provider } from 'react-redux';
import { WeatherBoard } from './components/WeatherBoard/WeatherBoard';
import { store } from './store/store';
import { citySlice } from './components/City/slice';

export const App = () => {
    return (
        <Provider store={store}>
            <WeatherBoard />
        </Provider>
    );
};
store.dispatch(citySlice.actions.increment());
sstore.dispatch(citySlice.actions.decrement());
console.log(store.getState());
