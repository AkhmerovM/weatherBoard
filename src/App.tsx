import React from 'react';
import { Provider } from 'react-redux';
import { WeatherBoard } from './modules/city/components/WeatherBoard';
import { store } from './store/store';
import './style.less';

export const App = () => {
    return (
        <Provider store={store}>
            <WeatherBoard />
        </Provider>
    );
};
