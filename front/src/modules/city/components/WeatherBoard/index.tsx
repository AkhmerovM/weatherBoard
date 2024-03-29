import React, { useEffect } from 'react';
import styles from './style.less';
import { SunLoader } from '@/modules/city/components/SunLoader';
import { useSelectCityState } from '@/modules/city/selectors';
import { useDispatch } from 'react-redux';
import { getCities } from '@/modules/city/api';
import { AppDispatch } from '@/store/store';
import { CitiesContainer } from '@/modules/city/components/CitiesContainer/CitiesContainer';
import { ErrorComponent } from '@/modules/city/components/ErrorComponent';
import { ModuleState } from '@/store/types';
import { Header } from '@/modules/city/components/Header';
import { CITY_IDS_LS, DEFAULT_DRAWER_CITIES } from '@/modules/drawer/constants';
import { LocalStorageService } from '@/modules/drawer/services/localStorage';
import { PollComponent } from '@/modules/common/components/PollComponent';

export function WeatherBoard () {
    const dispatch: AppDispatch = useDispatch();
    const { data: { cities, requestTime }, error, moduleState } = useSelectCityState();
    let activeCitiesIds = LocalStorageService.get(CITY_IDS_LS);

    if (!activeCitiesIds?.length) {
        activeCitiesIds = Object.keys(DEFAULT_DRAWER_CITIES).map(id => +id);
    }

    useEffect(() => {
        dispatch(getCities(activeCitiesIds));
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
                <CitiesContainer requestTime={requestTime} cities={cities} />
            </div>
            <PollComponent cityIds={activeCitiesIds} />
        </div>
    );
}
