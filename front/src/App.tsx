import React from 'react';
import { Provider } from 'react-redux';
import { WeatherBoard } from './modules/city/components/WeatherBoard';
import { store } from './store/store';
import './common.less';
import './constants.less';
import { ErrorBoundary } from '@/modules/common/components/ErrorBoundary';

export const App = () => {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <WeatherBoard />
            </Provider>
        </ErrorBoundary>
    );
};
