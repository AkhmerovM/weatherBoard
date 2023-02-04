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
import { DrawerComponent } from '@/modules/drawer/components/DrawerComponent';
import { DEFAULT_CITIES_IN_DRAWER } from '@/modules/drawer/constants';
import { selectActiveCitiesIds } from '@/modules/drawer/selectors';
import { LocalStorageService } from '@/modules/drawer/services/localStorage';

export function WeatherBoard () {
    const [open, setOpen] = useState(true);
    const dispatch: AppDispatch = useDispatch();
    const { data: cities, error, moduleState } = useSelectCityState();
    let activeCitiesIds = useSelector(selectActiveCitiesIds);
    if (!activeCitiesIds.length) {
        activeCitiesIds = LocalStorageService.get('cities');
        if (!activeCitiesIds?.length) {
            activeCitiesIds = Object.keys(DEFAULT_CITIES_IN_DRAWER).map(id => +id);
        }
    }
    // const initialCities = localStorage.getItem('cities');

    useEffect(() => {
        dispatch(fetchCities(activeCitiesIds));
    }, []);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);
    const handleClose = useCallback(() => {
        setOpen(false);
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
            <Header onClick={handleOpen} />
            <div className={styles.wrapper}>
                <CitiesContainer cities={cities}/>
            </div>
            <DrawerComponent submitSetActiveCities={handleClose} activeCitiesIds={activeCitiesIds} handleClose={handleClose} isOpen={open} />
        </div>
    );
}
