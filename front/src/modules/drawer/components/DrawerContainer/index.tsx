import React, { useMemo, useState } from 'react';
import { DRAWER_CITIES } from '@/modules/drawer/constants';
import { Button, Divider } from 'antd';
import { TCity } from '@/modules/city/types';
import { PropType } from '@/modules/common/types';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import { fetchCities } from '@/modules/city/api';
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


    const handleAddAnotherCity = (cityId: PropType<TCity, 'id'>) => {
        setActiveCities(activeCities.concat(cityId));
        setAnotherCities(anotherCities.filter((id) => cityId !== id));
        setIsChanged(true);
    };
    const handleAddActiveCity = (cityId: PropType<TCity, 'id'>) => {
        setAnotherCities(anotherCities.concat(cityId));
        setActiveCities(activeCities.filter((id) => cityId !== id));
        setIsChanged(true);
    };
    const handleSetActiveCities = () => {
        submitSetActiveCities();
        LocalStorageService.set('cities', activeCities);
        dispatch(fetchCities(activeCities));
    };

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
