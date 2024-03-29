import React, { useCallback, useMemo, useState } from 'react';
import {CITY_IDS_LS, DRAWER_CITIES} from '@/modules/drawer/constants';
import { Button, Divider } from 'antd';
import { TCity } from '@/modules/city/types';
import { PropType } from '@/modules/common/types';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import {getCities} from '@/modules/city/api';
import { LocalStorageService } from '@/modules/drawer/services/localStorage';
import styles from './style.less';
import { DrawerCitiesContainer } from '@/modules/drawer/components/DrawerCitiesContainer';

type DrawerContainerProps = {
    activeCitiesIds: PropType<TCity, 'id'>[],
    submitSetActiveCities: () => void,
}
export const DrawerContainer: React.FC<DrawerContainerProps> = ({ activeCitiesIds, submitSetActiveCities }) => {
    const [activeCities, setActiveCities] = useState<PropType<TCity, 'id'>[]>(activeCitiesIds);
    const dispatch: AppDispatch = useDispatch();

    const anotherCitiesIds = useMemo(() => Object.keys(DRAWER_CITIES).filter((id) => {
        return !activeCitiesIds.find((el) => el === +id);
    }).map(id => +id), [activeCitiesIds]);

    const [anotherCities, setAnotherCities] = useState<PropType<TCity, 'id'>[]>(anotherCitiesIds);
    const [isChanged, setIsChanged] = useState(false);

    const handleAddAnotherCity = useCallback((cityId: PropType<TCity, 'id'>) => {
        setActiveCities(activeCities.concat(cityId));
        setAnotherCities(anotherCities.filter((id) => cityId !== id));
        setIsChanged(true);
    }, [activeCities, anotherCities]);
    const handleAddActiveCity = useCallback((cityId: PropType<TCity, 'id'>) => {
        setAnotherCities(anotherCities.concat(cityId));
        setActiveCities(activeCities.filter((id) => cityId !== id));
        setIsChanged(true);
    }, [anotherCities, activeCities]);
    const handleSetActiveCities = useCallback(() => {
        submitSetActiveCities();
        LocalStorageService.set(CITY_IDS_LS, activeCities);
        dispatch(getCities(activeCities));
    }, [submitSetActiveCities, activeCities]);

    return (
        <>
            <DrawerCitiesContainer title={'Активные города'} citiesIds={activeCities} cityOnclick={handleAddActiveCity} />
            <Divider/>
            <DrawerCitiesContainer title={'Неактивные города'} citiesIds={anotherCities} cityOnclick={handleAddAnotherCity} />
            <div>
                <Button className={styles.buttonSubmit} type={'primary'} disabled={!isChanged} onClick={handleSetActiveCities}>Save</Button>
            </div>
        </>
    );
};
