import React, { useCallback, useEffect, useState } from 'react';
import styles from './style.less';
import { SunLoader } from '@/modules/city/components/SunLoader';
import { useSelectCityState } from '@/modules/city/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '@/modules/city/api';
import { AppDispatch } from '@/store/store';
import { CitiesContainer } from '@/modules/city/components/CitiesContainer/CitiesContainer';
import { ErrorComponent } from '@/modules/city/components/ErrorComponent';
import { ModuleState } from '@/store/types';
import { Header } from '@/modules/city/components/Header';
import { DEFAULT_DRAWER_CITIES } from '@/modules/drawer/constants';
import { LocalStorageService } from '@/modules/drawer/services/localStorage';

export function WeatherBoard () {
    const dispatch: AppDispatch = useDispatch();
    const { data: cities, error, moduleState } = useSelectCityState();
    let activeCitiesIds = LocalStorageService.get('cities');

    if (!activeCitiesIds?.length) {
        activeCitiesIds = Object.keys(DEFAULT_DRAWER_CITIES).map(id => +id);
    }

    useEffect(() => {
        dispatch(fetchCities(activeCitiesIds));
    }, []);

    if (moduleState === ModuleState.error) {
        return (<div className={styles.centerContainer}>
            <ErrorComponent error={error} />
        </div>);
    }

    if (moduleState === ModuleState.loading) {
        return (
            <div className={styles.centerContainer}>
                <SunLoader/>
            </div>
        );
    }
    return (
        <div className={styles.weatherBoard}>
            <Header activeCitiesIds={activeCitiesIds} />
            <div className={styles.wrapper}>
                <CitiesContainer cities={cities}/>
            </div>
        </div>
    );
}
