import React, { useEffect } from 'react';
import styles from './style.less';
import { SunLoader } from '@/modules/city/components/SunLoader';
import { useSelectCityState } from '@/modules/city/selectors';
import { useDispatch } from 'react-redux';
import { fetchCities } from '@/modules/city/api';
import { AppDispatch } from '@/store/store';
import { CitiesContainer } from '@/modules/city/components/CitiesContainer/CitiesContainer';
import { ErrorComponent } from '@/modules/city/components/ErrorComponent';
import { ModuleState } from '@/store/types';

export function WeatherBoard () {
    const dispatch: AppDispatch = useDispatch();
    const { data: cities, error, state } = useSelectCityState();
    useEffect(() => {
        dispatch(fetchCities());
    }, []);
    if (state === ModuleState.error) {
        return (<div className={styles.centerContainer}>
            <ErrorComponent error={error} />
        </div>);
    }
    if (state === ModuleState.loading) {
        return (<div className={styles.centerContainer}>
            <SunLoader/>
        </div>);
    }
    return (
        <div className={styles.weatherBoard}>
            <div className={styles.title}>weatherBoard</div>
            <div className={styles.wrapper}>
                <CitiesContainer cities={cities}/>
            </div>
        </div>
    );
}
