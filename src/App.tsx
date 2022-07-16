import React from 'react';
import { Provider } from 'react-redux';
import { WeatherBoard } from './components/WeatherBoard/WeatherBoard';
import { store } from './store/store';

export const App = () => {
    return (
        <Provider store={store}>
            <WeatherBoard />
        </Provider>
    );
};
